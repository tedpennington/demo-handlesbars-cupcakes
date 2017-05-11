"use strict";

let inventory = [];
let bakery = {};

var fillInventory = (data => {
    data.forEach(function(element){
    inventory.push(element);
    });
});

bakery.getInventory = () => {
    return inventory;
};


bakery.loadInventory = () => {
    return new Promise( function(resolve, reject){
        let inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "https://nss-cupcakes-demo-data.firebaseio.com/ccakes.json");
        inventoryLoader.send();

        inventoryLoader.addEventListener("load", function(){
            var data = JSON.parse(this.responseText);
            fillInventory(data);
            // inventory = data;
            resolve(data);
        });
    });
};

module.exports = bakery;