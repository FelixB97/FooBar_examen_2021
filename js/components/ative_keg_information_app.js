"use strict";

export function active_keg_information_app() {
    console.log("active_keg_information_app loaded");

    displayKegData();
}

function displayKegData(){
    const selector = document.querySelectorAll("#active_keg_information_app .keg_container .keg");

    let counter = 0;
    selector.forEach( () => {
        counter++
        const percentage = (((globalData.barData.taps[(counter-1)].level)/2500)*100).toFixed(0);
        document.querySelector(`#active_keg_information_app .keg_container .keg${counter} h3`).innerHTML = globalData.barData.taps[(counter-1)].beer;
        document.querySelector(`#active_keg_information_app .keg_container .keg${counter} h4`).innerHTML = `${percentage}%`; 
        document.querySelector(`#active_keg_information_app .keg_container .keg${counter} div .beer`).style.height = `${((globalData.barData.taps[(counter-1)].level)/2500)*100}%`; 
        document.querySelector(`#active_keg_information_app .keg_container .keg${counter} div .foam`).style.height = `${(((globalData.barData.taps[(counter-1)].level)/2500)*100)/10+2}%`; 
        document.querySelector(`#active_keg_information_app .keg_container .keg${counter} img`).src = `./logos_highres/${globalData.barData.taps[(counter-1)].beer.replaceAll(" ", "").toLowerCase()}.png`;

        if (globalData.barData.taps[(counter-1)].level === 0) {
            document.querySelector(`#active_keg_information_app .keg_container .keg${counter} div .foam`).style.height = 0;
        }

    })

    setTimeout(displayKegData, 1000);
}

