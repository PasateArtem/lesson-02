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
        $('.main-slider_2 .container').slick({
            
            prevArrow: $ ( '.prev2' ),
            nextArrow: $ ( '.next2' ),
          
    
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

function initialize() {     
    var myLatlng = new google.maps.LatLng(50.02034, 36.21634);
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
}
 
    