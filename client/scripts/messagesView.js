// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    App.fetch(Messages.populateMessages);
    MessagesView.render();
  },

  render: function () {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');

    for (let messageId in Messages._data) {
      MessagesView.renderMessage(Messages._data[messageId]);
      // MessagesView.renderMessage(messageId);
    }
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    //use template on one message
    //append that one message to the chat
    MessagesView.$chats.append(MessageView.render(message));
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};