const MessageClass = {
	BOT: 'message-bot',
	USER: 'message-user',
	CHAT_BOT: 'chat-message-bot',
	CHAT_USER: 'chat-message-user'
};

const UtilsClass = {
	CLOSED: 'closed',
	OPENED: 'show',
	CENTER_SPINNER: 'center-spinner',
	CLOSE: 'close',
	SPACE: 'space'
};

const BotMessage = {
	WELCOME: 'Hola! ¿Cómo puedo ayudarte?',
	RESPONSE_ONE:
		'Gracias por tu interés en realizar prácticas en nuestra institución. Te invitamos a ingresar a: https://litoral.edu.co/portal/estudiante/ para verificar los requisitos y procedimientos necesarios para poder realizar las prácticas o te acerques a nuestra oficina. Allí te brindaremos información detallada acerca de las opciones de prácticas disponibles, los requisitos y procedimientos necesarios para su realización, así como cualquier otra información que necesites para completar el proceso de aplicación. Saludos.'
};

const options = [
	'1. Soy estudiante en busca de prácticas',
	'2. Soy Estudiante en búsqueda de homologación',
	'3. Somos una empresa en búsqueda de estudiantes para prácticas o pasantías'
];

export { MessageClass, UtilsClass, BotMessage, options };
