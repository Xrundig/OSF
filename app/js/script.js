/*$(".logo-text").click( function(event){
	alert('hi');
})*/







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


	/*Current year*/
	var date = new Date();
	var year = date.getFullYear(); 
	console.log(year);
	document.getElementById('generated').innerHTML += '&#9400 Copyright ' + year + '<br>' + 'All rights reserved';
	


	/*Navbar hover effect*/


	$('.product-carousel').slick({
	    slidesToShow: 4, 
	    autoplay:true,
	    autoplaySpeed: 5000,
	    prevArrow: "<div class='prevArrow'></div>",
	    nextArrow: "<div class='nextArrow'></div>",
	    slidesToScroll: 4,
	    responsive: [
	    	{
	    		breakpoint: 992,
	    		settings: {
	    			slidesToShow: 3,
	    			slidesToScroll: 3,
	    		}
	    	},
	    	{	
	    		breakpoint: 768,
	    		settings: {
	    			slidesToShow: 2,
	    			slidesToScroll: 2,
	    		}
	    	},
	    	{	
	    		breakpoint: 578,
	    		settings: {
	    			slidesToShow: 1,
	    			slidesToScroll: 1,
	    			arrows: false,
	    		}
	    		
	    	}
	    ]
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

	/*Hover effect on products*/
	$('.item-text').hover(function(event){

			console.log(event);
			event.preventDefault();
	})
	$('.item').hover(
		
		


		function(event){
			
			var selected = document.createElement('div');
			selected.className = 'item-selected';
			this.append(selected);
			var selectedHeart = document.createElement('div');
			selectedHeart.className = 'selected-heart';
			selected.appendChild(selectedHeart);
			var heart = document.createElement('div');
			heart.className = 'heart';
			selectedHeart.appendChild(heart);
			var selectedPlus = document.createElement('div');
			selectedPlus.className = 'selected-plus';
			selected.appendChild(selectedPlus);
			var plus = document.createElement('div');
			plus.className = 'plus';
			selectedPlus.appendChild(plus);
		
		},
		function(event){
			
			$('.item-selected').remove();
		}

	)
	
	$('.button').click(function(){
    	$('.load').addClass('unvisible');
    	$('.additional').removeClass('unvisible');
    });

    function checkPosition() {
    if($(window).width() < 767) {
    	console.log('hi');
        $('.special').addClass('unvisible');
    } else {
        $('.special').removeClass('unvisible');
    }
}


});



	/*Calculating clicks on hearts and pluses on products*/

	var counterHearts = 0;
	var counterPlus = 0;
	$('.item').click(function(){
		if(event.target.className == "selected-heart" || event.target.className == "heart"){
			if(counterHearts==0){
				var counter = document.createElement('div');
				counter.className = 'counter';
				$('#like').append(counter);
			}
			counterHearts++;
			$('.counter').html(counterHearts);
		}
		if(event.target.className == "selected-plus" || event.target.className == "plus"){
			if(counterPlus==0){
				var calculator = document.createElement('div');
				calculator.className = 'calculator';
				$('#plus').append(calculator);
			}
			counterPlus++;
			$('.calculator').html(counterPlus);
		}
		
	})

	/*Sign in window*/
	$('#user').click(function(){
		$('.sign').removeClass('unvisible');
	})
	$('.sign').click(function(){
		if(event.target.className == "sign"){
			$('.sign').addClass('unvisible');
		}
	})
	$(document).keydown(function(e) {
    if (e.keyCode == 27 & !$('.sign').hasClass('unvisible')) {
        $('.sign').addClass('unvisible');
    }


});



