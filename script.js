/* --- JAVASCRIPT --- */
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');

        // Abre/Fecha o menu ao clicar no hamburguer
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
            //teste
            // Impede o scroll do corpo quando o menu está aberto
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'initial';
        });

        // Fecha o menu ao clicar em qualquer link (importante para sites de uma página)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
                document.body.style.overflow = 'initial';
            });
        });