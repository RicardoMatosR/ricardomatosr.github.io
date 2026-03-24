# 💻 Portfolio Personal - Ricardo Matos

[![Visita el Portfolio](https://img.shields.io/badge/URL-ricardomatosr.github.io-blue?style=for-the-badge)](https://ricardomatosr.github.io/)

Repositorio del proyecto web de mi portfolio personal, desarrollado para documentar mi progreso, proyectos y plan de estudios en el ciclo de **Desarrollo de Aplicaciones Multiplataforma (DAM)**.

<img width="1920" height="613" alt="image" src="https://github.com/user-attachments/assets/34ba8906-1ec6-418c-9cf0-8c5886eaf7e8" />


---

## 📋 Índice de Contenidos

1. [Objetivos del Proyecto](#1-objetivos-del-proyecto)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Arquitectura del Repositorio](#3-arquitectura-del-repositorio)
4. [Funcionalidades Clave](#4-funcionalidades-clave)
5. [Instrucciones de Despliegue](#5-instrucciones-de-despliegue)
6. [Contacto](#6-contacto)

---

## 1. Objetivos del Proyecto

El desarrollo de este portfolio cumple con los siguientes objetivos técnicos y académicos:
- Centralizar y exponer de forma pública los proyectos desarrollados durante el ciclo de DAM.
- Aplicar buenas prácticas de desarrollo web Frontend (HTML semántico, CSS responsivo y JS modular).
- Implementar técnicas de internacionalización y optimización SEO básica.
- Gestionar el control de versiones y el despliegue continuo mediante GitHub Pages.

---

## 2. Stack Tecnológico

Proyecto desarrollado íntegramente con tecnologías nativas (Vanilla) para garantizar rendimiento y control sobre el DOM:

* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white) **Estructura semántica y modular.**
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white) **Estilos, Flexbox/Grid y diseño responsivo.**
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E) **Lógica de cliente y manipulación del DOM.**
* ![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=flat-square&logo=github&logoColor=white) **Alojamiento estático.**

---

## 3. Arquitectura del Repositorio

Listado de los archivos principales que componen el ecosistema de la web:

- 📄 `index.html` - Página de inicio (Landing).
- 📄 `about.html` - Perfil técnico y biografía.
- 📄 `projects.html` - Galería de trabajos.
- 📄 `syllabus.html` - Desglose del temario de DAM.
- 🎨 `style.css` - Hoja de estilos global.
- ⚙️ `script.js` - Controladores principales.
- 🌐 `translations.js` - Diccionario de datos para i18n.
- 📄 `CV RICARDO MATOS 2026.pdf` - Documento del currículum.
- 🔍 `sitemap.xml` / `robots.txt` - Archivos de rastreo para buscadores.

---

## 4. Funcionalidades Clave

* **Soporte Multi-idioma:** Sistema dinámico creado en JS (`translations.js`) para cambiar el idioma de la interfaz sin recargar la página.
* **Responsive Design:** Interfaz fluida adaptable a dispositivos móviles, tablets y escritorio mediante Media Queries.
* **Optimización para Buscadores:** Implementación de sitemap y robots.txt siguiendo estándares SEO.
* **Navegación Modular:** División del contenido en múltiples archivos HTML para mejorar el mantenimiento y la escalabilidad.

---

## 5. Instrucciones de Despliegue

Este proyecto no requiere instalación de dependencias ni procesos de compilación (build).

### Entorno de desarrollo local:
```bash
# 1. Clonar el repositorio
git clone [https://github.com/RicardoMatosR/ricardomatosr.github.io.git](https://github.com/RicardoMatosR/ricardomatosr.github.io.git)

# 2. Acceder al directorio
cd ricardomatosr.github.io

# 3. Ejecutar
# Abrir directamente index.html en el navegador o usar un servidor local (ej. Live Server).
