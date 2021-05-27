$('.js-hamburger--button').on('click',function(){       // .js-hamburger--buttonをクリックすると
    $('.js-hamburger--button').toggleClass('in-open');  // .js-hamburger--buttonにcloseクラスを付与(ボタンのアニメーション)
    $('.p-gnavi__menu').fadeToggle(500);            // .p-gnavi__menuが0.5秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll');              // bodyにnoscrollクラスを付与(スクロールを固定)
});



//   $( ".js-hamburger--bt" ).click( function() {
//     $( this ).toggleClass( "is-open" );
//     $( ".js-hamburger" ).toggleClass( "is-open" );
//     $( "body" ).toggleClass( "is-open" );
// } );



// $('.c-button').on('click',function(){     // クリックすると
//     $('.c-button').toggleClass('close');    // closeというclassを付与(ボタンのアニメーション)
//     $('.p-gnavi').slideToggle( 100 );       // .p-gnaviが0.5秒でフェードイン(メニューのフェードイン)
//   });
  
  
//   $('.c-button.close').on('click',function(){       // クリックすると
//     $('.c-button.close').toggleClass('.c-button');  // closeというclassを付与(ボタンのアニメーション)
//     $('.p-gnavi').fadeToggle( 200 );                // .p-gnavが0.5秒でフェードアウト(メニューのフェードアウト)
//   });
  
  
//   $(function () {
//     $('.p-gnavi__main-list').hover( function () {
  
//       $(this).children('.p-gnavi__sub').slideToggle();
  
//       // openクラスをつける
//       $(this).toggleClass("open");
  
//       // ホバーされていないp-gnavi__main-listのopenクラスを取る
//       $('.p-gnavi__main-list').not(this).removeClass('open');
  
//       // 一つ開くと他は閉じるように
//       $('.p-gnavi__main-list').not($(this)).children('.p-gnavi__sub').slideUp();
//     });
//   });