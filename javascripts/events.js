"use strict";
console.log("events.js loaded");
var cardStyle = require('./cards.js');


function activateEvents() {
  $(".card-wrapper").click(cardStyle.highlightCard);
  // $("#editInput").keyup(function() {
  //   let highlighted = document.getElementsByClassName('is-clicked');
  //   if(highlighted.length === 0) {
  //     throwError();
  //   } else {
  //     cardStyle.editCard();
  //   }
  // });
}

module.exports = activateEvents;
