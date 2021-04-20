"use strict";

let hey = ['H', 'E', 'Y', '!'];
let updateHey = document.querySelector(".hey");
let heyTimer = 0;

function updateTimer () {
    heyTimer ++;
    if(heyTimer > 3){
        heyTimer = 0;
    }
    return heyTimer;
}

setInterval(function() {
    updateTimer();
    let currentLetter = hey[heyTimer];
    updateHey.innerHTML = currentLetter;
    // console.log(heyTimer);
}, 280);