"use strict";

// One IIFE should accept a message element id and then remove the correct 
// element from the DOM. This IIFE should also remove the corresponding message 
// from the private array that was created in the previous IIFE.

var Chatty = (function(oldChatty) {
  var newMessages = [];


  oldChatty.arrayDeleteMessage = function(indexFromDM) {
    if (indexFromDM > -1) {
      // console.log("hey");
      newMessages = oldChatty.getMessages();
      newMessages.splice(indexFromDM, 1);
      // console.log(newMessages);
      oldChatty.setMessages(newMessages);
    }
  };

  oldChatty.deleteMessage = function(id) {
    var index = oldChatty.getMessages().indexOf(document.getElementById(id).chatMessage);
    oldChatty.arrayDeleteMessage(index);
    document.getElementById(id).remove();
  };

  document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.parentElement.tagName.toLowerCase() === "li") {
      oldChatty.deleteMessage(event.target.parentElement.id);

    }
  });

  return oldChatty;

})(Chatty || {});