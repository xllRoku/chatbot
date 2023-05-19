import $ from 'jquery';

class ChatBot {
	private chatContainer: JQuery;
	private messageContainer: JQuery;

	constructor(chatContainer: JQuery, messageContainer: JQuery) {
		this.chatContainer = chatContainer;
		this.messageContainer = messageContainer;
	}

	private addMessage(message: string, isBot = false): void {
		let newMessage: JQuery<HTMLElement>;
		let messageContainer: JQuery<HTMLElement>;

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
		this.messageContainer.append(messageContainer);
		this.chatContainer.scrollTop(this.messageContainer[0].scrollHeight);
	}

	private welcomeMessage(): void {
		const botMessage = 'Hola! ¿Cómo puedo ayudarte?';
		this.addMessage(botMessage, true);
		const options = [
			'1. Soy estudiante en busca de prácticas',
			'2. Soy Estudiante en búsqueda de homologación',
			'3. Somos una empresa en búsqueda de estudiantes para prácticas o pasantías'
		];

		options.forEach(option => {
			this.addMessage(option, true);
		});
	}

	public sendMessage(): void {
		const userInput = $('#user-input').val();
		if (typeof userInput === 'string' && userInput.trim() !== '') {
			this.addMessage(userInput, false);
			$('#user-input').val('');
			setTimeout(() => {
				if (userInput === '1') {
					const responseMessage =
						'Gracias por tu interés en realizar prácticas en nuestra institución. Te invitamos a ingresar a: https://litoral.edu.co/portal/estudiante/ para verificar los requisitos y procedimientos necesarios para poder realizar las prácticas o te acerques a nuestra oficina. Allí te brindaremos información detallada acerca de las opciones de prácticas disponibles, los requisitos y procedimientos necesarios para su realización, así como cualquier otra información que necesites para completar el proceso de aplicación. Saludos.';
					this.addMessage(responseMessage, true);
				}
			}, 500);
		}
	}

	public openChat(): void {
		this.chatContainer.removeClass('closed').addClass('opened');
		this.messageContainer.addClass('center-spinner');

		console.log(this.chatContainer);

		console.log('hello world');

		setTimeout(() => {
			$('.lds-ellipsis').addClass('close');
			this.messageContainer
				.removeClass('center-spinner')
				.addClass('space');
		}, 400);
		setTimeout(() => {
			this.welcomeMessage();
		}, 600);
	}

	public closeChat(): void {
		$('.lds-ellipsis').removeClass('close');
		this.messageContainer.removeClass('space');
		this.chatContainer.removeClass('opened').addClass('closed');
		this.messageContainer.children().not('.lds-ellipsis').remove();
	}
}

export { ChatBot };
