// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // the add room button
  $select: $('#rooms select'), // the dropdown menu

  initialize: function() {
    // TODO: Perform any work which needs to be done
    RoomsView.render();
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms within the dropdown.

    let options = '';

    //iterate over all of the _data for rooms
    for (let i = 0; i < Rooms._data.length; i++) {
      //for each room in the data array, create an option tag populate with the room name
      options += `<option value="${Rooms._data[i]}">${Rooms._data[i]}</option>`;
    }

    //append the rooms to here
    //append the option tag to the select element
    RoomsView.$select.append(options);

    // this.$chats.append(MessageView.render(message));

    // //MessagesView.$chats
    // console.log()
  },

  renderRoom: function(roomname) {
    // TODO: Render out all the messages within a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
