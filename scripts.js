// A $( document ).ready() block.
$( document ).ready(function() {
    
    $(".burger-button").click(function(){
      
        $(".burger-button").toggleClass("active");
        $(".mobile-menu").toggleClass("active");
        
      });



});