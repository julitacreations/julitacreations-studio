// A $( document ).ready() block.
$( document ).ready(function() {
    
    // Hamburger Mobile Menu
    $(".burger-button").click(function(){
      
        $(".burger-button").toggleClass("active");
        $(".mobile-menu").toggleClass("active");
        
      });


    // Magnific Popup Gallery

    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery-item').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
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


    //Filterable Gallery
    $('#portfolio-filter span').click(function(){
    
      // Remove class 'active' from any <span> that is currently active 
      $('#portfolio-filter .active').removeClass('active');
      
      // give this <span> that was clicked on a class of 'active' 
      $(this).addClass('active');
  
      // get the name of the category from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
      var filterVal = $(this).text().replace(' ','-').replace(' ','-').replace(' ','-').toLowerCase();
  
      // This is something new, it's an 'each' function which is basically iterates through each element that matches the selector and applies the function one by one.
      
      $('#filterable-gallery .gallery-item').each(function() {
        
          // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 
  
          if (filterVal == 'all') {
            $(this).removeClass('hidden');
            
          }
        
          // if it's not all, then 
          else {
             if($(this).hasClass(filterVal)) {
                $(this).removeClass('hidden'); // show those that have the filter class
               
              }
            else {
                $(this).addClass('hidden'); // hide those that do not have the filter
              }};
          });
        
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



