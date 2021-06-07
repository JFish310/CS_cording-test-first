/* .p-hamburgerをクリックすると */
$('.p-hamburger').on('click',function(){

    // .p-hamburgerにis-openクラスを付与(ボタンのアニメーション)
    $('.p-hamburger').toggleClass('is-open');

    // bodyにnoscrollクラスを付与(スクロールを固定)
    $('body').toggleClass('noscroll');

    // .l-header__menuが0.5秒でフェードイン(メニューのフェードイン)
    $('.l-header__menu').fadeToggle(500);
});