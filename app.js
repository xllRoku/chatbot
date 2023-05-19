$(document).ready(function () {
  // Function to add a message to the chat
  function addMessage(message, isBot = false) {
    var chatContainer = $("#message-container");
    let messageContainer;
    var newMessage = $("<span>").addClass("message").text(message);

    if (isBot) {
      messageContainer = $("<div>").addClass("chat-message-bot");
      newMessage.addClass("bot-message");
    } else {
      messageContainer = $("<div>").addClass("chat-message-user");
      newMessage.addClass("user-message");
    }

    messageContainer.append(newMessage);
    chatContainer.append(messageContainer);
    chatContainer.scrollTop(chatContainer[0].scrollHeight);
  }

  // Function to send a message to the chat
  function sendMessage() {
    var userInput = $("#user-input").val();
    if (userInput.trim() !== "") {
      addMessage(userInput, false);
      $("#user-input").val("");
      setTimeout(function () {
        var botMessage = "Hello! How can I help you?";
        addMessage(botMessage, true);

        // Add options as buttons
        var options = [
          "1 - Soy estudiante en busca de prácticas",
          "2 - Soy Estudiante en búsqueda de homologación",
          "3 - Somos una empresa en búsqueda de estudiantes para prácticas o pasantías",
        ];

        options.forEach(function (option) {
          addMessage(option, true);
        });

        if (userInput === "1") {
          var responseMessage =
            "Gracias por tu interés en realizar prácticas en nuestra institución. Te invitamos a ingresar a: https://litoral.edu.co/portal/estudiante/ para verificar los requisitos y procedimientos necesarios para poder realizar las prácticas o te acerques a nuestra oficina. Allí te brindaremos información detallada acerca de las opciones de prácticas disponibles, los requisitos y procedimientos necesarios para su realización, así como cualquier otra información que necesites para completar el proceso de aplicación. Saludos.";
          addMessage(responseMessage, true);
        }
      }, 500);
    }
  }

  // Function to open the chat
  function openChat() {
    $("#chat-container").removeClass("closed").addClass("opened");
  }

  // Function to close the chat
  function closeChat() {
    $("#chat-container").removeClass("opened").addClass("closed");
  }

  // Event to send the message when clicking on the button
  $(document).on("click", "#send-button", function () {
    sendMessage();
  });

  // Event to open or close the chat when the floating bubble is clicked on
  $(document).on("click", "#chat-bubble", function () {
    if ($("#chat-container").hasClass("closed")) {
      openChat();
    } else {
      closeChat();
    }
  });
});
