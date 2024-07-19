$('a.smooth').on('click', function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
});

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
		speed:2000,
    autoplaySpeed: 5000,
		fade:true,
    dots: true,
		arrows: true,
		prevArrow: '<div class="prev-arrow"></div>',
    nextArrow: '<div class="next-arrow"></div>'
  });
});

$(function(){
	$('.acWrap .acTop').click(function(){
		$(this).next('.acBtm').slideToggle();
		$(this).next('.acBtm').siblings('.acBtm').slideUp();
		$(this).toggleClass('acOpen');    
		$(this).siblings('.acTop').removeClass('acOpen');
	});
	
});

$(function(){
	
		// レスポンシブ用ページトップ
		var ptop = $('#header');   
		ptop.hide();
		//スクロール値に達したらボタン表示
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
		   	ptop.fadeIn();
			} else {
				ptop.fadeOut();
			}
		});
	
});