"use strict";

export function worker_status_app() {
    console.log("worker_status_app loaded")

    displayEmployeeData();
    workerButtonEvent();
}

function displayEmployeeData() {
    const selector = document.querySelectorAll("#worker_status_app div");

    let counter = 0;
    selector.forEach( () => {
        counter++
        document.querySelector(`#worker_status_app .employee_${counter} h5`).innerHTML = globalData.bartenders[(counter-1)].name;
        document.querySelector(`#worker_status_app .employee_${counter} h3`).innerHTML = `Customer: ${globalData.bartenders[(counter-1)].servingCustomer}`;
        document.querySelector(`#worker_status_app .employee_${counter} h4`).innerHTML = globalData.bartenders[(counter-1)].statusDetail;
    })

    setTimeout(displayEmployeeData, 1000);
}

function workerButtonEvent() {
    document.querySelector(".buttons .worker_button").addEventListener("click", showWorkers)
}

function showWorkers() {
    document.querySelector("#worker_status_app").classList.remove("hidden");
    document.querySelector("#storage_amount_app").classList.add("hidden");
}