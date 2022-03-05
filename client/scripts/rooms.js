// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  populateRooms: function (data, cb) {
    // populate _data
    //iterate over the input data
    for (let i = 0; i < data.length; i++) {
      //look at the roomname key within each message obj
      //check if rooms data already contains that room
      if (!Rooms._data.includes(data[i].roomname)) {
        // if not, push into data
        Rooms._data.push(data[i].roomname);
      }
    }
    cb();
  },


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  //we wont want rooms to duplicate -- check if the room name is already in the structure
  //app.fetch


};