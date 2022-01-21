// A $( document ).ready() block.
$( document ).ready(function() {
    $('.hamburger-button').click(function(){
        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
    });

    // Animate on Scroll Activate
    AOS.init({
        duration: 500
    });

    // 1) Pup Up Gallery
    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
        
    });

    // 2) Pup Up Gallery w/ Button
    // lightGallery(document.getElementById('lightgallery-2'), {
    //   speed: 500,
    //   download: false,            
    //});
});




