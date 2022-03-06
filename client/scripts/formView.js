// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.
var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: App.username,
      roomname: Rooms.selected || 'lobby',
      text: FormView.$form.find('#message').val(),
    };

    //post this message to the server
    Parse.create(message, (data) => {
      //extend the message we created above with the extra info gotten from 'data' -- messageId for example
      _.extend(message, data[0]);
      //add this constructed message to the messages structure and then render
      Messages.add(message, MessagesView.render);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};