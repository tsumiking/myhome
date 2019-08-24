$(function(){
  
  //トグルボタン
  $('.toggle-switch').on('click',function(){
    
    $(this).toggleClass('open');

    $(this).next('.toggle-contents').slideToggle();
    
  });
  
    //画面固定
    var _window = $(window),
    _header = $('.header-bottom'),
    heroBottom;
 
    _window.on('scroll',function(){     
    heroBottom = $('.header-top').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
    });
    _window.trigger('scroll');
  
  
  //ハンバーガーメニュー
  $('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.sp-menu').slideUp();
  } else {
    $(this).addClass('active');
    $('.sp-menu').slideDown();
  }
});
  
  
});


//
//$(function(){
//  $('.toggle-switch').on('click',function(){
//    $(this).toggleClass('open');
//    $(this).next('.toggle-contents').slideToggle();
//  });
//});