/*$(".logo-text").click( function(event){
	alert('hi');
})*/




/*Запускаем карусель с учителями*/
$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $(".owl-carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
		loop:true,
    	margin:10,
    	nav:true,
    	navText: ["<div class='arrow-left'></div>, <div class='arrow-right'></div>"],
    	items: 4
	});

});