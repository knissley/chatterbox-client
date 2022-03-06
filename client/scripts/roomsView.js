// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // the add room button
  $select: $('#rooms select'), // the dropdown menu

  initialize: function() {
    //put event handlers in place on initialization
    //change handler
    RoomsView.$select.on('change', RoomsView.handleChange);
    //click handler
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    //get rid of all the options
    RoomsView.$select.html('');

    //render out individual options
    // grab the values of the Rooms data set
    // loop over each one
    // render each room
    Rooms.items().forEach(RoomsView.renderRoom);

    //select the option that is selected
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    //construct a jQuery option element with the value and text of the passed in roomname
    const $option = $('<option>')
      .val(roomname)
      .text(roomname);
    //append the constructed jQuery element to the select element (dropdown)
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    //set the selected room from the val of $select
    Rooms.selected = RoomsView.$select.val();
    //render messages again after .selected is changed
    MessagesView.render();
  },

  handleClick: function(event) {
    let roomname = prompt('Enter a room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }

};
