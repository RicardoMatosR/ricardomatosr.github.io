const translations = {
    es: {
        "nav_inicio": "inicio",
        "nav_trayectoria": "trayectoria",
        "nav_habilidades": "habilidades",
        "nav_proyectos": "proyectos",
        "nav_copiado": "¡Correo copiado!",
        "nav_cv_download": "Descargar CV",
        "hero_slogan": "Código limpio. Diseño funcional. Soluciones eficientes.",
        "scroll_down": "Bajar",

        /* Efecto Typewriter */
        "typing_titles": ["BACKEND ENGINEER", "SYSTEM ARCHITECT", "SOFTWARE DEVELOPER"],

        /* Botones Hero */
        "btn_ver_proyectos": "Ver Proyectos",
        "btn_contactar": "Contactar",

        /* Sección: Trayectoria */
        "section_trayectoria": "Trayectoria",
        "tray_dam_badge": "Formación Reglada",
        "tray_dam_date": "Actualidad",
        "tray_dam_title": "Grado Superior DAM",
        "tray_dam_subtitle": "Desarrollo de Aplicaciones Multiplataforma",
        "tray_dam_desc": "Formación técnica oficial en CES Juan Pablo II. Desarrollo Backend robusto con Java (Hibernate, creación de APIs REST), Python y Kotlin. Diseño avanzado de bases de datos relacionales y no relacionales. Dominio de lenguajes de marcas (HTML5/CSS3) aplicados a la creación de interfaces y páginas web modernas.",
        "tray_42_badge": "Formación Intensiva",
        "tray_42_date": "Actualidad",
        "tray_42_title": "42 Madrid",
        "tray_42_subtitle": "Escuela de Programación · Fundación Telefónica",
        "tray_42_desc": "Metodología intensiva peer-to-peer sin profesores, basada en proyectos reales y trabajo colaborativo. Dominio de bajo nivel y gestión de memoria con C, algoritmia compleja y sistemas Unix/Linux. Especialización progresiva en Inteligencia Artificial y Machine Learning con Python, apoyado en un uso exhaustivo de Git y GitHub para el control de versiones.",

        /* Sección: Habilidades */
        "section_habilidades": "Habilidades",
        "skill_sw_title": "Software<br>Engineering",
        "skill_sw_desc": "Sólida base en algoritmia, programación funcional y orientada a objetos (OOP). Creación de lógica de negocio robusta.",
        "skill_backend_title": "Backend &<br>Data Architecture",
        "skill_backend_desc": "Diseño de bases de datos relacionales (SQL) y no relacionales (MongoDB), modelos Entidad-Relación e integración de servicios mediante APIs REST.",
        "skill_systems_title": "Systems &<br>AppSec",
        "skill_systems_desc": "Administración de entornos Unix/Linux y desarrollo de software con mentalidad orientada a la seguridad (DevSecOps).",

        /* Sección: Proyectos */
        "section_proyectos": "Proyectos",
        "proj_github_link": "Ver en GitHub",
        "proj_lol_title": "League of Legends API Client",
        "proj_lol_desc": "Cliente API robusto desarrollado en Java bajo una arquitectura MVC limpia para la extracción y procesamiento de estadísticas de League of Legends en tiempo real. El sistema integra múltiples endpoints de Riot Games y Data Dragon, cruzando datos dinámicamente para calcular winrates, historiales de partidas precisos (KDA) y top de maestrías, utilizando GSON para el mapeo de modelos y Maven para la gestión de dependencias.",
        "proj_hibernate_title": "Motor E-Commerce con Hibernate",
        "proj_hibernate_desc": "Un sistema de gestión de e-commerce centrado en el backend diseñado para demostrar arquitectura empresarial. Construido desde cero utilizando Java y Hibernate ORM, este proyecto implementa de manera estricta los patrones de diseño MVC y DAO para asegurar un código limpio y escalable. Los logros técnicos clave incluyen un robusto sistema de Control de Acceso Basado en Roles (RBAC) con paneles dinámicos, integración fluida con APIs REST externas (DummyJSON) para poblar el catálogo, y el uso de transacciones ACID de alta seguridad. El algoritmo de compra garantiza la integridad de los datos al ejecutar los cobros y las actualizaciones de stock en una única operación atómica en la base de datos, garantizando pagos seguros y fiables.",
        "proj_42_title": "42 Cursus",
        "proj_42_desc": "Repositorio central de mis proyectos en el core cursus de 42. Actualmente desarrollando mi propia implementación de printf y get_next_line (GNL) en C para manejo a bajo nivel de I/O y descriptores de archivo. El próximo desafío será push_swap, enfocado en la optimización de algoritmos de ordenamiento.",
        "proj_casino_title": "CasinoHub Multi-Game",
        "proj_casino_desc": "Desarrollo de una arquitectura modular para integrar la lógica de múltiples juegos de casino, gestionando el estado y la interacción a través de un frontend dinámico.",

        /* Footer */
        "footer_text": "Diseñado y desarrollado por Ricardo Matos."
    },
    en: {
        "nav_inicio": "home",
        "nav_trayectoria": "experience",
        "nav_habilidades": "skills",
        "nav_proyectos": "projects",
        "nav_copiado": "Email copied!",
        "nav_cv_download": "Download CV",
        "hero_slogan": "Clean code. Functional design. Efficient solutions.",
        "scroll_down": "Scroll Down",

        /* Efecto Typewriter */
        "typing_titles": ["BACKEND ENGINEER", "SYSTEM ARCHITECT", "SOFTWARE DEVELOPER"],

        /* Botones Hero */
        "btn_ver_proyectos": "View Projects",
        "btn_contactar": "Contact",

        /* Sección: Trayectoria */
        "section_trayectoria": "Experience",
        "tray_dam_badge": "Formal Education",
        "tray_dam_date": "Present",
        "tray_dam_title": "Higher Degree in DAM",
        "tray_dam_subtitle": "Multiplatform Application Development",
        "tray_dam_desc": "Official technical degree at CES Juan Pablo II. Robust Backend development with Java (Hibernate, REST API creation), Python, and Kotlin. Advanced design of relational and non-relational databases. Proficiency in markup languages (HTML5/CSS3) applied to the creation of modern interfaces and web pages.",
        "tray_42_badge": "Intensive Training",
        "tray_42_date": "Present",
        "tray_42_title": "42 Madrid",
        "tray_42_subtitle": "Coding School · Fundación Telefónica",
        "tray_42_desc": "Intensive peer-to-peer methodology with no instructors, based on real-world projects and collaborative work. Low-level mastery and memory management with C, complex algorithms, and Unix/Linux systems. Progressive specialization in Artificial Intelligence and Machine Learning using Python, supported by extensive use of Git and GitHub for version control.",

        /* Sección: Habilidades */
        "section_habilidades": "Skills",
        "skill_sw_title": "Software<br>Engineering",
        "skill_sw_desc": "Strong foundation in algorithms, functional programming and OOP. Building robust, maintainable business logic.",
        "skill_backend_title": "Backend &<br>Data Architecture",
        "skill_backend_desc": "Relational (SQL) and non-relational (MongoDB) database design, Entity-Relationship modelling and service integration via REST APIs.",
        "skill_systems_title": "Systems &<br>AppSec",
        "skill_systems_desc": "Unix/Linux environment administration and security-oriented software development (DevSecOps mindset).",

        /* Sección: Proyectos */
        "section_proyectos": "Projects",
        "proj_github_link": "View on GitHub",
        "proj_lol_title": "League of Legends API Client",
        "proj_lol_desc": "Robust API client developed in Java using a clean MVC architecture for real-time extraction and processing of League of Legends statistics. The system integrates multiple Riot Games and Data Dragon endpoints, dynamically cross-referencing data to calculate winrates, precise match histories (KDA), and top masteries, utilizing GSON for model mapping and Maven for dependency management.",
        "proj_hibernate_title": "Hibernate E-Commerce Engine",
        "proj_hibernate_desc": "A fully functional, backend-driven e-commerce management system designed to demonstrate enterprise architecture. Built from scratch using Java and Hibernate ORM, this project implements strict MVC and DAO design patterns to ensure a clean separation of concerns. Key technical achievements include a robust Role-Based Access Control (RBAC) system with dynamic admin/customer dashboards, seamless integration with external REST APIs (DummyJSON) using HttpClient to populate the catalog, and highly secure ACID transactions. The purchasing algorithm guarantees data integrity by executing wallet deductions and stock updates in a single, atomic database operation, ensuring safe and reliable e-commerce transactions.",
        "proj_42_title": "42 Cursus",
        "proj_42_desc": "Central repository for my projects in the 42 core cursus. Currently developing my own implementation of printf and get_next_line (GNL) in C for low-level I/O and file descriptor management. The next challenge will be push_swap, focusing on sorting algorithm optimization.",
        "proj_casino_title": "CasinoHub Multi-Game",
        "proj_casino_desc": "Modular architecture design to integrate the game logic of multiple casino games, managing state and user interaction through a dynamic frontend.",

        /* Footer */
        "footer_text": "Designed and developed by Ricardo Matos."
    }
};