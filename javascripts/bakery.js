"use strict";

let inventory = [];
let bakery = {};

// let fillInventory = (data => {
//     data.ccakes.forEach(function(element){
//     inventory.push(element);
//     });
// });

bakery.getInventory = () => {
    return inventory;
};


bakery.loadInventory = () => {
    return new Promise( function(resolve, reject){
        let inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();

        inventoryLoader.addEventListener("load", function(){
            var data = JSON.parse(this.responseText);
            inventory = data;
            resolve(data);
        });
    });
};

module.exports = bakery;