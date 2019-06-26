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




	/*Navbar hover effect*/


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

	/*Hover effect on products*/
	$('.item').hover(
		function(){
			var selected = document.createElement('div');
			selected.className = 'item-selected';
			this.appendChild(selected);
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
		function(){
			
			$('.item-selected').remove();
		}
	)



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

});

