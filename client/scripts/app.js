// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('this is from fetch: ', data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      // Messages.populateMessages.call(Messages, data);
      if (data.length > 0) {
        Messages.populateMessages(data, MessagesView.render);
        Rooms.populateRooms(data, RoomsView.render);
      }

      //callback(data);
      callback();

      // Messages.populateMessages(data);
      // Rooms.populateRooms(data);

    }, null);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
