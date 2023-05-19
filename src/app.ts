import $ from 'jquery';

console.log('hello world');

$(document).ready(() => {
	function addMessage(message: string, isBot = false) {
		var chatContainer = $('#message-container');
		let messageContainer;
		let newMessage;

		if (isBot) {
			newMessage = $('<span>').addClass('message-bot').text(message);
			messageContainer = $('<div>').addClass('chat-message-bot');
			newMessage.addClass('bot-message');
		} else {
			newMessage = $('<span>').addClass('message-user').text(message);
			messageContainer = $('<div>').addClass('chat-message-user');
			newMessage.addClass('user-message');
		}

		messageContainer.append(newMessage);
		chatContainer.append(messageContainer);
		chatContainer.scrollTop(chatContainer[0].scrollHeight);
	}

	const welcomeMessage = () => {
		const botMessage = 'Hola! cómo puedo ayudarte?';
		addMessage(botMessage, true);
		const options = [
			'1. Soy estudiante en busca de prácticas',
			'2. Soy Estudiante en búsqueda de homologación',
			'3. Somos una empresa en búsqueda de estudiantes para prácticas o pasantías'
		];

		options.forEach(option => {
			addMessage(option, true);
		});
	};

	function sendMessage() {
		const userInput = $('#user-input').val();
		if (typeof userInput === 'string' && userInput?.trim() !== '') {
			addMessage(userInput, false);
			$('#user-input').val('');
			setTimeout(function () {
				if (userInput === '1') {
					var responseMessage =
						'Gracias por tu interés en realizar prácticas en nuestra institución. Te invitamos a ingresar a: https://litoral.edu.co/portal/estudiante/ para verificar los requisitos y procedimientos necesarios para poder realizar las prácticas o te acerques a nuestra oficina. Allí te brindaremos información detallada acerca de las opciones de prácticas disponibles, los requisitos y procedimientos necesarios para su realización, así como cualquier otra información que necesites para completar el proceso de aplicación. Saludos.';
					addMessage(responseMessage, true);
				}
			}, 500);
		}
	}

	function openChat(welcomeMessage: () => void) {
		const chatContainer = $('#chat-container');
		const messageContainer = $('#message-container');

		chatContainer.removeClass('closed').addClass('opened');
		messageContainer.addClass('center-spinner');

		setTimeout(() => {
			$('.lds-ellipsis').addClass('close');
			messageContainer.removeClass('center-spinner').addClass('space');
		}, 400);
		setTimeout(() => {
			welcomeMessage();
		}, 600);
	}

	function closeChat() {
		const chatContainer = $('#chat-container');
		const messageContainer = $('#message-container');

		$('.lds-ellipsis').removeClass('close');
		messageContainer.removeClass('space');
		chatContainer.removeClass('opened').addClass('closed');
		messageContainer.children().not('.lds-ellipsis').remove();
	}

	$(document).on('click', '#send-button', function () {
		sendMessage();
	});

	$(document).on('click', '#chat-bubble', function () {
		if ($('#chat-container').hasClass('closed')) {
			openChat(welcomeMessage);
		} else {
			closeChat();
		}
	});
});
