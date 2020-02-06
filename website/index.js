'use strict';

//yeehaw

let menuText = document.getElementsByClassName('goAway')
let heroPhone = document.getElementById('heroPhone');
let hamburgerMenu = document.getElementById('hamburger');


console.log(menuText.length)
document.getElementById('hamburger').addEventListener('click', function(){
    for(let i=0; i<menuText.length; i++){
        if(menuText[i].style.visibility !== "hidden"){
            heroPhone.style.marginTop = "0rem";
            menuText[i].style.visibility = "hidden";
       } else {
        heroPhone.style.marginTop = "31rem";
        menuText[i].style.visibility = "visible";
       }
    }
    console.log(window.innerWidth)
})

function fixWindow(){
    if(window.innerWidth >= 700){
        heroPhone.style.marginTop = "0";
        for(let i=0; i<menuText.length; i++){
        menuText[i].style.visibility = "visible";
        }
    } else if(window.innerWidth <= 699){
        heroPhone.style.marginTop = "31rem";
        for(let i=0; i<menuText.length; i++){
            menuText[i].style.visibility = "visible";
        }
    }
}