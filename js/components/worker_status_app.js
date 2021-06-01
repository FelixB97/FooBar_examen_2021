"use strict";

export function worker_status_app() {
    console.log("worker_status_app loaded")
    displayEmployeeData();
    workerButtonEvent();
}
//displas data from globalData.barData.bartenders
function displayEmployeeData() {
    const selector = document.querySelectorAll("#worker_status_app .worker");
    let counter = 0;
    selector.forEach( () => {
        counter++
        document.querySelector(`#worker_status_app .employee_${counter} h5`).innerHTML = globalData.barData.bartenders[(counter-1)].name + " is serving:";
        document.querySelector(`#worker_status_app .employee_${counter} h3`).innerHTML = `Customer: ${globalData.barData.bartenders[(counter-1)].servingCustomer}`;
        document.querySelector(`#worker_status_app .employee_${counter} h4`).innerHTML = globalData.barData.bartenders[(counter-1)].statusDetail;

        if (globalData.barData.bartenders[(counter-1)].servingCustomer == null) {
            document.querySelector(`#worker_status_app .employee_${counter} h3`).innerHTML = "Customer: none";
        }
    });
    setTimeout(displayEmployeeData, 1000);
}
//below is button event and class changes
function workerButtonEvent() {
    document.querySelector(".buttons .worker_button").addEventListener("click", showWorkers)
}

function showWorkers() {
    document.querySelector("#worker_status_app").classList.add("hidden");
    document.querySelector("#storage_amount_app").classList.remove("hidden");

    document.querySelector(".buttons .worker_button").classList.add("primary");
    document.querySelector(".buttons .worker_button").classList.remove("secondary");

    document.querySelector(".buttons .storage_button").classList.add("secondary");
    document.querySelector(".buttons .storage_button").classList.remove("primary");
}