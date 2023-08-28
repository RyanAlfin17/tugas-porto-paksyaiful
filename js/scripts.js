/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// document.addEventListener("DOMContentLoaded", function () {
//     var youtubeLinks = document.querySelectorAll(".youtube-link");
    
//     youtubeLinks.forEach(function (link) {
//         link.addEventListener("click", function () {
//             var embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.getAttribute("data-embed") + '" frameborder="0" allowfullscreen></iframe>';
//             this.innerHTML = embedCode;
//         });
//     });
// });

   // Ambil semua elemen yang memiliki kelas "youtube-link"
    const youtubeLinks = document.querySelectorAll(".youtube-link");

    // Tambahkan event listener untuk setiap link
    youtubeLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Ambil ID video dari atribut data-embed
            const videoId = this.getAttribute("data-embed");

            // Cari kontainer video yang sesuai
            const videoContainer = this.parentElement.parentElement.querySelector(".project-video");

            // Ganti kontainer dengan iframe video YouTube
            videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        });
    });