"use strict";

export function active_keg_information_app() {
    console.log("active_keg_information_app loaded");

    displayKegData();
}

function displayKegData(){
    const selector = document.querySelectorAll("#active_keg_information_app div");

    let counter = 0;
    selector.forEach( () => {
        counter++
        document.querySelector(`#active_keg_information_app .keg${counter} h3`).innerHTML = globalData.taps[(counter-1)].beer;
        document.querySelector(`#active_keg_information_app .keg${counter} h4`).innerHTML = globalData.taps[(counter-1)].level;
    })

    setTimeout(displayKegData, 1000);
}