$(document).ready(function(){	
	$('#navigation > ul > li').hover(
	function(){
	  $(this).children("a").siblings().stop().slideDown(500);
	},
	function(){
	  $(this).children("a").siblings().stop().slideUp(500);
	});
	
	$('.block_left > ul > li').hover(
	function(){
	  $(this).children("a").siblings().stop().slideDown(0);
	},
	function(){
	  $(this).children("a").siblings().stop().slideUp(0);
	});
	
	$(".wpar__ .block_left li.grey").click(function(){
		$(this).addClass('hd').siblings().removeClass('hd');
	});
	
	$('#banner .slider').slick({
		dots: true
	});
	
	$(function() {
		var $items = $('.img_small > div');
		$items.click(function() {
			$items.removeClass('act');
			$(this).addClass('act');
			var index = $items.index($(this));
			$('.img_big > div').hide().eq(index).fadeIn("700");
			return false;
		}).eq(0).click();
	});
	
});