"use strict";

export function current_queue_app() {
    console.log("current_queue_app loaded");
    displayQueue();
}
//display queue first defines the template pointer and container, 
//then appens HTML elements based onn the size of globalData.barData.queue
function displayQueue() {
    const container = document.querySelector("#que_container");
    const template = document.querySelector("#current_que_app template");
    container.innerHTML ="";
    let counter = 0;

    globalData.barData.queue.forEach( (person) => {
    
        counter++
        const klon = template.cloneNode(true).content;
        
        klon.querySelector(`h3`).innerHTML = counter + ".";
        klon.querySelector(`h4`).innerHTML = "#" + person.id;

        //here sepperateBeers takes the entire order for each item in the queue, 
        //to create the correct string with no duplicating beer order items
        const parsedOrder = sepperateBeers(person.order);

        klon.querySelector(`h5`).innerHTML = parsedOrder.join("");

        container.appendChild(klon); 
    });
   
    setTimeout(displayQue, 1000);
}
//by creating a unique array of objects with a beerCount,
//we can compare the original order with that new array, 
//and count up for each instance of each order item.
function sepperateBeers(orderArray) {
    
    const uniqueArray = orderArray.filter(onlyUnique);
    let parsedArray = [];

    uniqueArray.forEach( (drink) => {
        const beerObject = {
            beerName: drink,
            beerCount: 0
        }

        parsedArray.push(beerObject);

    });
    

    orderArray.forEach( (drink) => {
        const theIndex = parsedArray.findIndex(element => element.beerName === drink);
        parsedArray[theIndex].beerCount++;
    })

    const theStringArray = parsedArrayToString(parsedArray);

    return theStringArray

}
//function that when used with array.filter returns the array without duplicates
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

//creates an arrray of strings from the order and their beerCount
function parsedArrayToString(parsedArray) {
      let stringArray = [];
      parsedArray.forEach( (drink) => {
        const stringToPush = drink.beerCount + " x " + drink.beerName + "<br>";
        stringArray.push(stringToPush);
      });
      return stringArray
}