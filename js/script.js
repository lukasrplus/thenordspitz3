

$(document).ready(function(){

$(window).load(function(){
   function show_popup(){

    $('#box_pic1').fadeOut(1000);
    $('#box_pic2').delay(1000).fadeOut(1000);
    $('#box_pic3').delay(2000).fadeOut(1000);
    $('#box_pic4').delay(3000).fadeOut(1000);
    $('#box_pic5').delay(4000).fadeOut(1000);
    $('#box_pic6').delay(5000).fadeOut(1000);
    $('#box_pic7').delay(6000).fadeOut(1000);
    $('#box_pic8').delay(7000).fadeOut(1000);
    $('#box_pic9').delay(8000).fadeOut(1000);





   };
   window.setTimeout( show_popup, 500 ); // 5 seconds
});

});
