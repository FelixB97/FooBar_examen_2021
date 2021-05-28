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
        
        klon.querySelector(`h3`).innerHTML = counter + ".";
        klon.querySelector(`h4`).innerHTML = "#" + person.id;

        const parsedOrder = sepperateBeers(person.order);

        klon.querySelector(`h5`).innerHTML = parsedOrder.join("");

        container.appendChild(klon); 
    });
   
    setTimeout(displayQue, 1000);
}

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

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function parsedArrayToString(parsedArray) {
      let stringArray = [];
      parsedArray.forEach( (drink) => {
        const stringToPush = drink.beerCount + " x " + drink.beerName + "<br>";
        stringArray.push(stringToPush);
      });
      return stringArray
  }