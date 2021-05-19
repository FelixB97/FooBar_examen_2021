"use strict";

export function current_que_app() {
    console.log("current_que_app loaded");

    displayQue();
}

function displayQue() {

    const container = document.querySelector("#que_container");
    const template = document.querySelector("#current_que_app template");
    container.innerHTML ="";
    
    let counter = 0;

    globalData.barData.queue.forEach( (person) => {
    
        counter++
        const klon = template.cloneNode(true).content;
        
        klon.querySelector(`h3`).innerHTML = counter + ". in que";
        klon.querySelector(`h4`).innerHTML = person.id;
        klon.querySelector(`h5`).innerHTML = person.order.join();

        container.appendChild(klon); 
    });
   
    setTimeout(displayQue, 1000);
}