//学习一下fetch

$(document).ready(function(){;
  var winHig = $(window).height()-66
  $("#flip").css({"height":winHig+"px"})
  $("#panel").click(function(){
    $("#flip").slideUp();
    $("#aaa").slideDown();
  })
  var tochStat,tochIng,tochEnd;
  $(document).on('touchstart',function(e){
    tochStat = e.originalEvent.changedTouches[0].pageY;//开始时的坐标
    // console.log(tochStat);
  });
   $(document).on('touchmove',function(e){
            tochEnd = e.originalEvent.changedTouches[0].pageY;
            tochIng = tochEnd- tochStat;
            console.log(tochIng)
            if(tochIng>300){
              $("#flip").slideDown();
              $("#aaa").slideUp();
            }
        });
}); 
