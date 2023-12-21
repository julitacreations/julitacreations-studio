// A $( document ).ready() block.
$( document ).ready(function() {
    
    // Hamburger Mobile Menu
    $(".burger-button").click(function(){
      
        $(".burger-button").toggleClass("active");
        $(".mobile-menu").toggleClass("active");
        
      });


    // Lightgallery Pop-up
    lightGallery(document.getElementById('lightgallery'), {
      
      speed: 500,
      download: false
      
    });

    // Accordion
    $('.accordion-header').click(function(){
      // Toggle the visibility of the content when the header is clicked
      $(this).next('.accordion-content').slideToggle();
      // Toggle active class to highlight the active section
      $(this).toggleClass('active');
      // Toggle the + and - signs
      $(this).find('::after').html($(this).hasClass('active') ? '-' : '+');
      // Hide other content when a new section is opened
      $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
      // Remove active class from other headers
      $('.accordion-header').not(this).removeClass('active');
      // Reset the + and - signs on other headers
      $('.accordion-header').not(this).find('::after').html('+');
    });


});




