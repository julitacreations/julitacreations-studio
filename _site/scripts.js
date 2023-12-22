// A $( document ).ready() block.
$( document ).ready(function() {
    
    // Hamburger Mobile Menu
    $(".burger-button").click(function(){
      
        $(".burger-button").toggleClass("active");
        $(".mobile-menu").toggleClass("active");
        
      });


    // Magnific Popup Gallery
      $('.image-link').magnificPopup({type:'image'});
    

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


  //Moving banner 
  // 1) Start by defining the elements that we want to target
  const banner = document.querySelector('.tickerBanner');
  const textBlock = banner.querySelectorAll('.text-block');

  // 2) Next we make a variable for the length of a single banner block unit
  let bannerBlock = 0;

  console.log(textBlock[1].offsetWidth)

// 3) Then we take that banner block and add in all the individual text blocks to the single bannerBlock number
  textBlock.forEach( block => {
    bannerBlock += block.offsetWidth
  });

  
  // console.log(bannerBlock)
  // console.log(bannerLength)
  
  // 4) we then use this to set how far we push it off the side
  document.documentElement.style.setProperty('--bannerBlockLength', `${bannerBlock}px`);
  //  and how long it takes to do it in. In this example it goes at a rate of 50px a second but all you need to do is change the 50 to what ever px per second your looking for
  document.documentElement.style.setProperty('--bannerBlockTime', `${(bannerBlock / 50)}s`);
  
  // 5) here we are setting the current length of our banner to a single set of blocks
  let bannerLength = bannerBlock
  
  // 6) next we need to write a quick function to populate the rest of your elements 
  function extendBanner() {
    // so first up we check to see if our banner length is shorter then the screen width plus 1 extra bannerblock
    if (bannerLength < (screen.width + bannerBlock) ) {
      // 7)  if it is then we loop over all the textBlocks
      textBlock.forEach(block => {
        console.log(block.innerHTML)
        // 8) creates new elements
        let newDiv = document.createElement('div')
        // 9) next fill in the new content 
        newDiv.innerHTML = block.innerHTML
        // 10) and as a last step add the newly created element and its content into the DOM
        banner.appendChild(newDiv);
      });
      // now we update our bannerLength by our banner block 
      
      bannerLength += bannerBlock;


      console.log(bannerLength)
      // then we run our extend banner function again
      extendBanner()
    }
  }


// now because we want this to run on page load we just call the function no need for any event listeners 
  extendBanner()


  console.log(bannerLength)



