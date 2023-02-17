$(function(){
	$('.card').on('click',function(){
		$(this).toggleClass('clicked');
	});

	setInterval(function(){$('.instruction').toggleClass('rubberBand animated');},2000);

});