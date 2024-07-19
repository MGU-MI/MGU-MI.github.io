
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