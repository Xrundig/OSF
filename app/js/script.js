/*$(".logo-text").click( function(event){
	alert('hi');
})*/

/*Navbar hover effect*/





/*Запускаем карусель с учителями*/
$(document).ready(function(){

	// Находим блок карусели
	/*var heroCarousel = $(".hero-carousel");*/

	// Запускаем плагин карусели
	$('.carousel').slick({
    dots: true,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
	
	// Находим блок карусели
	/*var carousel = $(".owl-carousel");*/

	// Запускаем плагин карусели
	$('.product-carousel').slick({
	    slidesToShow: 4, 
	    prevArrow: "<div class='prevArrow'></div>",
	    nextArrow: "<div class='nextArrow'></div>",
	  });
	$('.drop').hover(
			function(){
				$('.drop-service').removeClass(' unvisible');
				$('.drop-navigation').removeClass(' unvisible');
				$('.drop').css('color','white');
			},
			function(){
				$('.drop-service').addClass(' unvisible');
				$('.drop-navigation').addClass(' unvisible');
				$('.drop').css('color','#45413e');
			}
		)
	$('.drop-navigation').hover(
			function(){
				$('.drop-service').removeClass(' unvisible');
				$('.drop-navigation').removeClass(' unvisible');
				$('.drop').css('color','white');
			},
			function(){
				$('.drop-service').addClass(' unvisible');
				$('.drop-navigation').addClass(' unvisible');
				$('.drop').css('color','#45413e');
			}
		)

	
	
	/*
	$('.drop').hover(
		function(){
			$('.drop-navigation').removeClass(' unvisible');
		},
		function(){
			$('.drop-navigation').addClass(' unvisible');
		}
	)*/
/*
	$('.drop-navigation').hover(
		function(){
			$('.drop-navigation').removeClass(' unvisible');
			$('.drop-service').css('display', 'block');
		},
		function(){
			$('.drop-navigation').addClass(' unvisible');
			$('.drop-service').css('display', 'none');
		}
	)
	*/

});

