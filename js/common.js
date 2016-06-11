 var Homepage = {
 	init: function(){
        this.mainSlider();
        // this.burgerMenu();
 	},
 	mainSlider: function(){
 		$('.main-slider .container').slick({
 			slidesToShow: 1,
            slidesToScroll:1,
 			infinite: true,
            mobileFirst: true,
            prevArrow: $ ( '.prev' ),
            nextArrow: $ ( '.next' ),
            responsive: [{
        breakpoint: 500,
        settings: {
            slidesToShow: 1
        }
    }]  
    
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

});


 
    