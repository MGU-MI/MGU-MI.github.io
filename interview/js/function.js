//コントローラーの作成
const controller = new ScrollMagic.Controller();

//シーンの作成
const sec02 = new ScrollMagic.Scene({
    triggerElement: '#sec02',
    reverse:false
})

.setClassToggle('#sec02','fade-in')
.addTo(controller);

//シーンの作成
const sec03 = new ScrollMagic.Scene({
    triggerElement: '#sec03',
    reverse:false
})

.setClassToggle('#sec03','fade-in')
.addTo(controller);

//シーンの作成
const sec04 = new ScrollMagic.Scene({
    triggerElement: '#sec04',
    reverse:false
})

.setClassToggle('#sec04','fade-in')
.addTo(controller);

//シーンの作成
const sec05 = new ScrollMagic.Scene({
    triggerElement: '#sec05',
    reverse:false
})

.setClassToggle('#sec05','fade-in')
.addTo(controller);

//シーンの作成
const data = new ScrollMagic.Scene({
    triggerElement: '#data',
    reverse:false
})

.setClassToggle('#data','fade-in')
.addTo(controller);

$(function(){
	$('.mainImage').click(function(){
		$(this).next('.gridBox').slideToggle();
		$(this).next('.gridBox').siblings('.gridBox').slideUp();
		$(this).toggleClass('move');
		$(this).siblings('.move').removeClass('move');
	});
});