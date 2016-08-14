 $(document).ready(function() {
   var widthSlide = $('.slide').width();
       slideCol = $('.slide').length;
       widthSliderBlock = widthSlide * slideCol;
       leftSlDinamic = 0;
       sliderClick = 0;
       montSou = ['September',' October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'];

     
       //alert(sliderClick);
     

     
     $(function(slider){ 
        $('#slider').css('width' , widthSliderBlock) 
         });




        $('#right').click(function(right) {
        if (sliderClick + 1 < slideCol) {
        leftSlDinamic = leftSlDinamic - widthSlide;
        $('#slider').css('left' , leftSlDinamic);
        sliderClick = sliderClick + 1;
        $('#title-months').html(montSou[sliderClick]);    
        } 
                 
               
  });             
         
        $('#left').click(function(left) {
         
        if (sliderClick >= 1) {
        leftSlDinamic = leftSlDinamic + widthSlide;
        $('#slider').css('left' , leftSlDinamic);
        sliderClick = sliderClick - 1;
        $('#title-months').html(montSou[sliderClick]);
        }
                 
               
  });   
          
     });   
     
     
     
    
     





























