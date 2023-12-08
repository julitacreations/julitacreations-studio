// A $( document ).ready() block.
$( document ).ready(function() {
    
    // Hamburger Mobile Menu
    $(".burger-button").click(function(){
      
        $(".burger-button").toggleClass("active");
        $(".mobile-menu").toggleClass("active");
        
      });


});

 // Lightgallery Pop-up
 lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
  
});