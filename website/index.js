'use strict';

//yeehaw

let menuText = document.getElementById('goAway');
let heroPhone =document.getElementById('heroPhone');

document.getElementById('hamburger').addEventListener('click', function(){
    if(menuText.style.visibility !== "hidden"){
        heroPhone.style.marginTop = "5rem";
        menuText.style.visibility = "hidden";
   } else {
        heroPhone.style.marginTop = "38rem";
        menuText.style.visibility = "visible";
   }
})


    