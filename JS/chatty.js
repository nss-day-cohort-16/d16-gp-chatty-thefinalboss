"use strict";

var Chatty = (function(oldChatty) {
var messages = [];


   oldChatty.loadMessages = function(something) {
     var request = new XMLHttpRequest();
     request.open("GET", "messages.json");
     request.send();

     request.addEventListener("load", function () {
     var messageData = JSON.parse(this.responseText).messages;
     something(messageData);
     })
   };
   
   return oldChatty;


})(Chatty || {});
  

