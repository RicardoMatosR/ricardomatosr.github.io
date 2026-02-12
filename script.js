/* =========================================
   PARTE 1: FUNCIONES QUE SE EJECUTAN AL CARGAR
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1.1 EFECTO DE ESCRITURA (TYPEWRITER) ---
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
});


/* =========================================
   PARTE 2: FUNCIONES PARA LAS VENTANAS MODALES
   (Están fuera para que el HTML las encuentre)
   ========================================= */

// 2.1 ABRIR VENTANA
window.abrirModal = function(idModal, idMiembroPorDefecto) {
    const modal = document.getElementById(idModal);
    if(modal) {
        modal.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; // Bloquear scroll

        // Activar el primer miembro por defecto
        const primerLi = modal.querySelector('.modal-sidebar li');
        if(primerLi) {
            cambiarMiembro(primerLi, idMiembroPorDefecto);
        }
    }
}

// 2.2 CERRAR VENTANA
window.cerrarModal = function(idModal) {
    const modal = document.getElementById(idModal);
    if(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Reactivar scroll
    }
}

// 2.3 CERRAR SI CLICK FUERA
window.cerrarSiClickFuera = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 2.4 CAMBIAR DE MIEMBRO (PESTAÑAS)
window.cambiarMiembro = function(elementoLi, idInfo) {
    const modal = elementoLi.closest('.modal-grid');
    if(!modal) return;
    
    // A. Resetear lista izquierda
    modal.querySelectorAll('.modal-sidebar li').forEach(li => li.classList.remove('seleccionado'));
    elementoLi.classList.add('seleccionado');

    // B. Resetear info derecha
    modal.querySelectorAll('.info-miembro').forEach(info => info.classList.remove('visible'));
    
    // C. Mostrar info correcta
    const infoAmostrar = modal.querySelector('#' + idInfo);
    if(infoAmostrar) {
        infoAmostrar.classList.add('visible');
    }
}

// 2.5 COPIAR CORREO DENTRO DEL MODAL
window.copiarEmail = function(email, boton) {
    navigator.clipboard.writeText(email).then(() => {
        let textoOriginal = boton.innerText;
        boton.innerText = "¡COPIADO!";
        boton.style.backgroundColor = "var(--accent)";
        boton.style.color = "#000";

        setTimeout(() => {
            boton.innerText = textoOriginal;
            boton.style.backgroundColor = "transparent";
            boton.style.color = "var(--accent)";
        }, 2000);
    });
}
