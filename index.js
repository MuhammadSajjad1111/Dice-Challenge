
var bdycolor=document.firstElementChild.lastElementChild.style.backgroundColor="red";


var randomNumber1=Math.floor(Math.random()*6) + 1;

var randomImageSelect="dice"+ randomNumber1 +".png";
var fullAddress="images/"+randomImageSelect;
var image1=document.querySelector(".img1");
   image1.setAttribute("src",fullAddress);


   var randomNumber2=Math.floor(Math.random()*6) + 1;

   var randomImageSelect="dice"+ randomNumber2 +".png";
   var fullAddress="images/"+randomImageSelect;
   var image2=document.querySelector(".img2");
    image2.setAttribute("src",fullAddress);

    if(randomNumber1>randomNumber2){
       greater=document.querySelector("h1").innerHTML="Player 1 wons";
    }
    else if(randomNumber2>randomNumber1){
         greater=document.querySelector("h1").innerHTML="Player 2 wons";
    }
    else{
       greater=document.querySelector("h1").innerHTML="Match tied";
    }
