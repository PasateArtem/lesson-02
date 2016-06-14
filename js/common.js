 var Homepage = {
 	init: function(){
        this.mainSlider();
        // this.burgerMenu();
 	},
 	mainSlider: function(){
 		$('.main-slider .container').slick({
 			
            prevArrow: $ ( '.prev' ),
            nextArrow: $ ( '.next' ),
          
    
         });
 	},
 // 	burgerMenu: function(){
	// 	$('.burger-btn').on('click', function(){
	// 		if(!$(this).hasClass('active')){
	// 			$(this).addClass('active');
	// 			$(this).next().slideDown('fast');
	// 		} else {
	// 			$(this).removeClass('active');
	// 			$(this).next().slideUp('fast');
	// 		}
	// 	});
	// }
 };


 $(window).on ('load', function(){
 	Homepage.init();
 });

 $(document).ready(function() {

	$(".burger-btn").click(function() {
		$(this).next().slideToggle();
	});
  
  $('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
  });	

});


 
    