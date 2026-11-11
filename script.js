document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. IDIOMA (ES / EN) --- */
    const langBtn = document.getElementById('lang-toggle');

    function getStoredLang() {
        try { return localStorage.getItem('lang'); } catch (e) { return null; }
    }

    function storeLang(lang) {
        try { localStorage.setItem('lang', lang); } catch (e) { /* sin almacenamiento */ }
    }

    const browserLang = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
    let currentLang = getStoredLang() || browserLang;
    if (!translations[currentLang]) currentLang = 'es';

    function updateLanguage() {
        const dict = translations[currentLang];
        document.documentElement.lang = currentLang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = dict[el.getAttribute('data-i18n')];
            if (value) el.innerHTML = value;
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const value = dict[el.getAttribute('data-i18n-title')];
            if (value) el.setAttribute('title', value);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const value = dict[el.getAttribute('data-i18n-aria')];
            if (value) el.setAttribute('aria-label', value);
        });

        if (langBtn) {
            langBtn.querySelectorAll('[data-lang]').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.lang === currentLang);
            });
        }
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            storeLang(currentLang);
            updateLanguage();
        });
    }

    updateLanguage();


    /* --- 2. NAVBAR: FONDO AL HACER SCROLL --- */
    const nav = document.getElementById('main-nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();


    /* --- 3. MENÚ MÓVIL --- */
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = () => {
        nav.classList.remove('menu-open');
        menuBtn.setAttribute('aria-expanded', 'false');
    };

    menuBtn.addEventListener('click', () => {
        const open = nav.classList.toggle('menu-open');
        menuBtn.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => { if (!nav.contains(e.target)) closeMenu(); });


    /* --- 4. ENLACE ACTIVO SEGÚN LA SECCIÓN VISIBLE --- */
    const navLinks = [...document.querySelectorAll('.nav-links a')];
    const sections = navLinks
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(section => sectionObserver.observe(section));
    }


    /* --- 5. APARICIÓN SUAVE AL HACER SCROLL --- */
    const revealItems = [...document.querySelectorAll('[data-reveal]')].filter(el => !el.closest('.hero'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(el => el.classList.add('is-visible'));
    } else {
        revealItems.forEach(el => {
            const siblings = [...el.parentElement.children].filter(c => c.hasAttribute('data-reveal'));
            el.style.transitionDelay = Math.min(siblings.indexOf(el), 4) * 40 + 'ms';
        });
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -4% 0px', threshold: 0.02 });
        revealItems.forEach(el => revealObserver.observe(el));
    }


    /* --- 6. FOCO DE LUZ EN LAS TARJETAS --- */
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('pointermove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
            card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
        });
    });


    /* --- 7. COPIAR CORREO --- */
    const toast = document.getElementById('toast');
    const email = 'ricardomatosromero04@gmail.com';
    let toastTimer;

    function showToast() {
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
    }

    // Método clásico, por si el navegador no deja usar navigator.clipboard
    function legacyCopy(text) {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        area.remove();
        return ok;
    }

    function copyEmail() {
        const fallback = () => {
            if (legacyCopy(email)) showToast();
            else window.location.href = 'mailto:' + email; // último recurso: abrir el correo
        };
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(email).then(showToast).catch(fallback);
        } else {
            fallback();
        }
    }

    document.querySelectorAll('[data-copy-email]').forEach(btn => btn.addEventListener('click', copyEmail));
});
