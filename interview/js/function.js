//コントローラーの作成
const controller = new ScrollMagic.Controller();

//シーンの作成
const sec02 = new ScrollMagic.Scene({
    triggerElement: '#sec02',
    reverse: false
})

    .setClassToggle('#sec02', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec03 = new ScrollMagic.Scene({
    triggerElement: '#sec03',
    reverse: false
})

    .setClassToggle('#sec03', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec04 = new ScrollMagic.Scene({
    triggerElement: '#sec04',
    reverse: false
})

    .setClassToggle('#sec04', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec05 = new ScrollMagic.Scene({
    triggerElement: '#sec05',
    reverse: false
})

    .setClassToggle('#sec05', 'fade-in')
    .addTo(controller);

//シーンの作成
const data = new ScrollMagic.Scene({
    triggerElement: '#data',
    reverse: false
})

    .setClassToggle('#data', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec07 = new ScrollMagic.Scene({
    triggerElement: '#sec07',
    reverse: false
})

    .setClassToggle('#sec07', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec08 = new ScrollMagic.Scene({
    triggerElement: '#sec08',
    reverse: false
})

    .setClassToggle('#sec08', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec09 = new ScrollMagic.Scene({
    triggerElement: '#sec09',
    reverse: false
})

    .setClassToggle('#sec09', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec10 = new ScrollMagic.Scene({
    triggerElement: '#sec10',
    reverse: false
})

    .setClassToggle('#sec10', 'fade-in')
    .addTo(controller);

//シーンの作成
const sec11 = new ScrollMagic.Scene({
    triggerElement: '#sec11',
    reverse: false
})

    .setClassToggle('#sec11', 'fade-in')
    .addTo(controller);

$(function () {
    $('.mainImage').click(function () {
        $(this).next('.gridBox').slideToggle();
        $(this).next('.gridBox').siblings('.gridBox').slideUp();
        $(this).toggleClass('move');
        $(this).siblings('.move').removeClass('move');
    });
});

$(function () {
    $('.tab-menu li').click(function () {
        var tabId = $(this).data('tab');

        // タブメニューのアクティブ切り替え
        $('.tab-menu li').removeClass('active');
        $(this).addClass('active');

        // コンテンツの表示切り替え
        $('.tab-pane').removeClass('active');
        $('#' + tabId).addClass('active');
    });
});