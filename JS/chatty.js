"use strict";

var Chatty = (function(oldChatty) {
// var messages = [];


   oldChatty.loadMessages = function(something) {
     var request = new XMLHttpRequest();
     request.open("GET", "JS/messages.json");
     request.send();

     request.addEventListener("load", function () {
     var messageDataArray = JSON.parse(this.responseText).messages;
     // console.log("messageData", messageDataArray);
     something(messageDataArray);
     });
   };
   
   return oldChatty;


})(Chatty || {});
  

