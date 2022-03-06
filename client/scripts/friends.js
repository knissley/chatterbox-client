// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {

  _data: new Set(),

  //return the friends at any given time
  items: function() {
    return [...Friends._data];
  },

  //return a boolean whether friends includes a particular name
  isFriend: function(username) {
    return Friends._data.has(username);
  },

  //will check whether a name is a friend, if so delete it, otherwise add it
  toggleStatus: function(username, callback = () => {}) {
    //accept a callback to 'refresh' the page when friend status has been toggled
    if (Friends.isFriend(username)) {
      Friends._data.delete(username);
      callback(false);
    } else {
      Friends._data.add(username);
      callback(true);
    }
  }

};