/* =========================================
   PARTE 1: FUNCIONES QUE SE EJECUTAN AL CARGAR
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
   
    // --- 0. BILINGUAL SUPPORT ---
    let currentLang = localStorage.getItem('lang') || 'en';
    const langBtn = document.getElementById('lang-toggle');

    function updateLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        // Translate title attributes (e.g. CV download tooltip)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (translations[currentLang][key]) {
                el.setAttribute('title', translations[currentLang][key]);
            }
        });
        if (langBtn) {
            langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        }
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('lang', currentLang);
            updateLanguage();
            // Reset typing effect on language switch to prevent out-of-bounds/glitches
            charIndex = 0;
            isDeleting = false;
            if (textElement) {
                textElement.textContent = "";
            }
        });
    }

    updateLanguage();

    // --- 1.1 EFECTO DE ESCRITURA (TYPEWRITER) ---
    const textElement = document.getElementById('typing-text');
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let typingTimeout;

    function type() {
        const words = translations[currentLang].typing_titles;
        if (wordIndex >= words.length) wordIndex = 0;
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 1200;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(type, typeSpeed);
    }
    if(textElement) type();


    // --- 1.2 SCROLL SUAVE AL HACER CLICK EN LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- 1.3 BOTÓN COPIAR CORREO (NAVBAR SUPERIOR) ---
    const botonCorreo = document.getElementById('boton_correo'); 
    const mensajeAlerta = document.getElementById('mensaje_copiado'); 
    const miEmail = "ricardomatos04@gmail.com"; 

    if (botonCorreo) {
        botonCorreo.addEventListener('click', () => {
            navigator.clipboard.writeText(miEmail).then(() => {
                mensajeAlerta.classList.add('mostrar');
                setTimeout(() => {
                    mensajeAlerta.classList.remove('mostrar');
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar: ', err);
            });
        });
    }

    // --- 1.4 NAVBAR: TRANSPARENTE EN TOP, BLUR AL HACER SCROLL ---
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
        const handleNavScroll = () => {
            if (window.scrollY > 60) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleNavScroll, { passive: true });
        handleNavScroll();
    }
});


