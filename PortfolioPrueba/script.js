document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DE CAMBIO DE TEMA ---
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });


    // --- 2. EFECTO TYPEWRITER ---
    const textElement = document.getElementById('typing-text');
    const words = ["Programador Multiplataforma", "Desarrollador Web", "Administrador de Sistemas", "Diseño Bases de Datos"];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; 
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; 
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if(textElement) type();


    // --- 3. SCROLL SUAVE ---
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


    // --- 4. COPIAR CORREO (IDs ACTUALIZADOS CON _) ---
    const botonCorreo = document.getElementById('boton_correo'); // Antes boton-correo
    const mensajeAlerta = document.getElementById('mensaje_copiado'); // Antes mensaje-copiado
    const miEmail = "ricardo.matos@gmail.com"; 

    if (botonCorreo) {
        botonCorreo.addEventListener('click', () => {
            
            navigator.clipboard.writeText(miEmail).then(() => {
                
                // La clase del CSS sigue siendo 'mostrar'
                mensajeAlerta.classList.add('mostrar');
                
                setTimeout(() => {
                    mensajeAlerta.classList.remove('mostrar');
                }, 2000);
            
            }).catch(err => {
                console.error('Error al copiar: ', err);
            });
        });
    }
});