$(function(){


  var movefun = function( event ){
    event.preventDefault();
  }

  //モーダルを開く処理
  $('#modal-btn').click(function(){
    $('#modal-wrapper,.modal').fadeIn();

    //背景を固定
    $('html, body').css('overflow', 'hidden');

    //背景を固定(ios)
    window.addEventListener( 'touchmove' , movefun , { passive: false } );


  });

  //モーダルを閉じる処理
  $('#modal-wrapper,.modal-close').click(function(){
    $('#modal-wrapper,.modal').fadeOut();
  });

});
