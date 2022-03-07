// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  _data: {},


  items: function() {
    // return Object.values(Messages._data);
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  //add one message to the storage
  add: function(message, callback = () => {}) {
    Messages._data[message.message_id] = message;
    callback(Messages.items());
  },

  //update the overall storage
  update: function(messages, callback = () => {}) {
    //grab the previous length (before updating in the for loop)
    let length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.message_id] = Messages.conform(message);
    }

    //Only invoke the passed in callback if something has changed (if the current length is different than the previous length)
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};