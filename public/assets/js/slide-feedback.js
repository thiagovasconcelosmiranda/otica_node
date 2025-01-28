var qtdImage = document.querySelectorAll('.feedback--slider img');
var balls = document.querySelector('.feedback-card-circle');
var count = 0;

 document.querySelector('.feedback-card-left').addEventListener('click', ()=>{
    count--;
    slide();
 });
 document.querySelector('.feedback-card-right').addEventListener('click', ()=>{
    count++;
    slide();
 });


 function slide(){
   if(count >= qtdImage.length-2){
     count = 0;
   }else if(count < 0){
    count = qtdImage.length-1;
   }
   
   document.querySelector('.feedback--slider').style.marginLeft = -330 * count + "px";
 }