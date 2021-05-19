"use strict";

export function top_5_beers_app() {
    console.log("top_5_beers_app loaded")
    rankbeers();
}

function rankbeers() {
    globalData.ranking = [];
    globalData.currentRankCounter = 0;
    createBeerArray();
    rankBeers();
    displayRankedBeers();
}

function createBeerArray() {
    globalData.barData.storage.forEach((beerType) => {
        const beerObject = {beerName: beerType.name, beerSales: 0};
        globalData.ranking.push(beerType.name = beerObject);
    })
}


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

function displayRankedBeers() {
    const sortedArray = globalData.ranking.sort(function (a, b) {
        return b.beerSales - a.beerSales;
      });

    let counter = 1
    const top5 = document.querySelectorAll("#top5Content div");
    top5.forEach( () => {

        if (sortedArray[counter].beerSales > 0 ) {
            document.querySelector(`#top5Content div:nth-child(${counter}) h4`).innerHTML = `${counter}. ` + sortedArray[counter].beerName;
            document.querySelector(`#top5Content div:nth-child(${counter}) h3`).innerHTML = sortedArray[counter].beerSales;
        }

        counter++
    })


    
    setTimeout(displayRankedBeers,1000);
}
