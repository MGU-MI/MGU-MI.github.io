
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
		
	$('a.smooth').on('click',function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
	
	
});