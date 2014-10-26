$(document).ready(function(){
    $("#things li").mouseover(function(){
        $("a",this).addClass("hidden");
        $(".lk",this).css("color","black");
    });

    $("#things li").mouseout(function(){
        $("a",this).removeClass("hidden");
        $(".lk",this).css("color","");

    });

     $('#header').addClass('inPlace');
     setTimeout(function(){ $('#things').addClass('inPlace') }, 1000);

});
