// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <h3 class="username">
          <%- username %>
        </h3>
        <div class="text">
          <%- text %>
        </div>
        <div class="room-name">
          <%- roomname %>
        </div>
      </div>
    `)

  // var compiled = _.template(
  //   "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" +
  //     "<div class='movie-info'>" +
  //       "<h3 class='movie-title'>" +
  //          "<%= movieTitle %>" +
  //       "</h3>" +
  //       "<p class='movie-director'>" +
  //          "<%= movieDirector %>" +
  //       "</p>" +
  //     "</div>" +
  //   "</div>"
  // );


};

// feed += MessageView.render(currentMessage);