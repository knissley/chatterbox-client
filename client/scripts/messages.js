// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.


// handleSubmit: function(event) {
//   // Stop the browser from submitting the form
//   event.preventDefault();
//   const messageText = $('#message').val();

//   let message = {
//     username: '',
//     text: messageText,
//     roomname: 'test'
//   };

var Messages = {
  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  getCurrentData: function() {
    return this._data;
  },

  populateMessages: function(data, cb) {
    // var messagesData = this._data;
    // console.log(this._data);
    // $.getJSON(Parse.server, function(data) {
    //   for (let i = 0; i < data.length; i++) {
    //     console.log('in for loop ', messagesData);
    //     messagesData.push(data[i]);
    //   }
    // });

    //iterate over the data array of objects
    //make the _data structure populate with these objects
    // Messages._data = [];

    // {
    //  messageId: {messageObj}
    // }
    for (let message of data) {
      Messages._data[message.message_id] = message;
    }

    // data.forEach()

    console.log('this is within populate messages', Messages._data);
    cb();
  },

  //retrieve
  retrieveById: function(targetId) {
    //expect a number
    for (var i = 0; i < this._data.length; i++) {
      if (this._data[i].message_id === targetId) {
        return this._data[i];
      }
    }
  },

  retrieveAllMessagesByRoom: function(roomName) {
    //create a room array
    const roomMessages = [];
    for (var i = 0; i < this._data.length; i++) {
      if (this._data[i].roomname === roomName) {
        roomMessages.push(this._data[i]);
      }
    }
    return roomMessages;
  },



  //insert
  //function that just receives a message input and does the pushing
  insertCreatedMessage: function(obj) {
    this._data.push(obj);
    console.log(this._data);
  }
};