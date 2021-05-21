"use strict";

export function top_5_beers_app() {
    console.log("top_5_beers_app loaded")
    rankbeers(); // calls main function
}
//starts all the functions and creates global arrays to store ranking data
function rankbeers() {
    globalData.ranking = [];
    globalData.currentRankCounter = 0;
    createBeerArray();
    rankBeers();
    displayRankedBeers();
}
// pushes all beer types to array to store individual beerSales information
function createBeerArray() {
    globalData.barData.storage.forEach((beerType) => {
        const beerObject = {beerName: beerType.name, beerSales: 0};
        globalData.ranking.push(beerType.name = beerObject);
    })
}

// goes through all current orders and if id is > than currentRankCounter that orders beer sales get counted in the ranking array.
function rankBeers() {
    globalData.barData.queue.forEach((que) => {
        
        if (que.id > globalData.currentRankCounter) {
            const itemsToCountUp = que.order;
            
            itemsToCountUp.forEach((order) => {
                const currentIndex = globalData.ranking.findIndex(x => x.beerName === order);
                globalData.ranking[currentIndex].beerSales++;
            })
            globalData.currentRankCounter = que.id;
        }
    })
    setTimeout(rankBeers, 1000);
}
//sorts ranked array by beersales to get correct ranking order on display
function displayRankedBeers() {
    const sortedArray = globalData.ranking.sort(function (a, b) {
        return b.beerSales - a.beerSales;
      });

    let counter = 1
    const top5 = document.querySelectorAll("#top5Content div");
    //displays top 5 best selling beers
    top5.forEach( () => {
        if (sortedArray[counter].beerSales > 0 ) {
            document.querySelector(`#top5Content div:nth-child(${counter}) h4`).innerHTML = `${counter}. ` + sortedArray[(counter-1)].beerName;
            document.querySelector(`#top5Content div:nth-child(${counter}) h3`).innerHTML = sortedArray[(counter-1)].beerSales;
        }

        counter++
    })


    
    setTimeout(displayRankedBeers,1000);
}
