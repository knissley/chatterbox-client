// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  //use a set just like with friends data because we want to keep track of a unique set of values
  _data: new Set(),

  //keep track of the currently selected room to display
  selected: 'lobby',

  //get the list of rooms
  items: function() {
    return [...Rooms._data];
  },

  //take in a roomname (default to lobby) and return whether the roomname passed in is currently selected
  isSelected: function(roomname = 'lobby') {
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
  },

  //add a new room to the room set, change the selected room to the passed in room, and run a callback on the updated rooms data
  add: function(roomname, callback = () => {}) {
    Rooms._data.add(roomname);
    Rooms.selected = roomname;
    callback(Rooms.items());
  },

  //take messages, loops over them, and add their roomname to the rooms set, run a callback on the update rooms data
  update: function(messages, callback = () => {}) {
    var length = Rooms._data.size;

    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

    if (Rooms.selected === null) {
      // make the first room the default selected room
      Rooms.selected = Rooms._data.values().next().value;
    }

    // only invoke the callback if something changed
    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  }
};