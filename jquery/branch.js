$(document).ready(function(){
var coverHeigh = $('.cover-view').height()

 $(window).scroll(function(){
   var sct = $(this).scrollTop();

  if(sct > coverHeigh){
   //메뉴나오기
   $('.gnb').css('position','fixed').addClass('sub-design')

 }else if (sct < coverHeigh) {
   
    $('.gnb').css('position','absolute').removeClass('sub-design')
 }


})

})
