(function() {
  $(window).resize(function(){
    var width = 'auto';
    var display = 'fixed';
    var mainContentHeight = $('#main_content').height();
    var myStupidFaceOffset = $('#my-stupid-face').offset();

    if(mainContentHeight > myStupidFaceOffset.top+100){
        width = $(window).width()-350-100
    }

    if($(window).width() < 1000){
      console.log($(window).width());
        width = '100%';
        display = 'none';
    }
    $('#main_content').css({
      width:width
    });
    console.log(display);
    $('#my-stupid-face').css({
      display:'block'
    });
    $('#my-stupid-face').css({
      display:display
    });
  });
  $(window).trigger('resize');
})();
