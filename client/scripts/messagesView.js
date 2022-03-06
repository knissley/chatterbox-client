// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    //add handleclick listener whenever initialized
    //the classname .username included here lets us specify that we only want this to trigger when clicking an element with that classname -- to avoid this happening when clicking anywhere on a message
    MessagesView.$chats.on(
      'click',
      '.username',
      MessagesView.handleClick
    );
  },

  render: function () {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');

    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    const $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //extract the username from the clicked DOM element
    //.data username comes from the MessageView template where we put a data-username attr
    let username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    Friends.toggleStatus(username, MessagesView.render);
  }

};