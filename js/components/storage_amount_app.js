"use strict";

export function storage_amount_app() {
    console.log("storage_amount_app loaded")

    displayStorageData();
    storageButtonEvent();
}
//displays data from globalData.barData.storage
function displayStorageData() {
    const selector = document.querySelectorAll("#storage_container div");
    let counter = 0;
    selector.forEach( () => {
        counter++
        document.querySelector(`#storage_amount_app .storage_unit_${counter} h3`).innerHTML = globalData.barData.storage[(counter-1)].name;
        document.querySelector(`#storage_amount_app .storage_unit_${counter} h4`).innerHTML = globalData.barData.storage[(counter-1)].amount;
    })

    setTimeout(displayStorageData, 1000);
}
//below is button event and class changes
function storageButtonEvent() {
    document.querySelector("#storage_amount_app").classList.add("hidden");
    document.querySelector(".buttons .storage_button").addEventListener("click", showStorage)
}

function showStorage() {
    document.querySelector("#worker_status_app").classList.remove("hidden");
    document.querySelector("#storage_amount_app").classList.add("hidden");

    document.querySelector(".buttons .storage_button").classList.add("primary");
    document.querySelector(".buttons .storage_button").classList.remove("secondary");

    document.querySelector(".buttons .worker_button").classList.add("secondary");
    document.querySelector(".buttons .worker_button").classList.remove("primary");
}