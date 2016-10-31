"use strict";


var Chatty = (function(oldChatty) {
  var messages = [];

  oldChatty.jsonMessages = function(messageData) {
    for (var key in messageData) {
      messages.push(messageData[key]);
      oldChatty.outputToWindow(messages, "chat_window");
    }
  };

  document.getElementById('user_input')
    .addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        oldChatty.newMessage();
      }
    });

  oldChatty.newMessage = function() {
    var userMessage = document.getElementById('user_input').value;
    if (userMessage) {
      messages.push(userMessage);
      // console.log("our new message: ", messages);
      oldChatty.outputToWindow(messages, "chat_window");
    } else {
      return;
    }
  };

  // One IIFE should contain a function that accepts an element id, and the user message, 
  // and then add the user's message - along with the delete button - to the specified parent element

  oldChatty.outputToWindow = function(msg, chatID) {
    var newElement;
    for (var m in msg) {
      newElement = document.createElement('li');
      newElement.id = m;
      newElement.className = "messageClass";
      newElement.chatMessage = msg[m];
      var d = new Date();
      d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
      newElement.innerHTML = msg[m] + "<button type='button' class='deleteMe'>DELETE</button> " + d;
      // console.log("m", m);
    }
    document.getElementById(chatID).appendChild(newElement);
    document.getElementById('user_input').value = "";
  };

  document.getElementById("clear_button")
    .addEventListener("click", clearAll);

  function clearAll() {
    var window = document.getElementById("chat_window");
    window.innerHTML = "";
    console.clear();
  }

  // This IIFE should also expose a function to read all messages, and delete a single message.

  oldChatty.getMessages = function() {
    return messages;
  };

  oldChatty.setMessages = function(dM) {
    // return messages = dM;
    messages = dM;
    // console.log(messages);
  };

  return oldChatty;

})(Chatty || {});

Chatty.loadMessages(Chatty.jsonMessages);