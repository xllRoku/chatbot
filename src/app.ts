import $ from 'jquery';
import { ChatBot } from './chat';

$(() => {
	const chatContainer = $('#chat-container');
	const messageContainer = $('#message-container');
	const chatBot = new ChatBot(chatContainer, messageContainer);
	$(document).on('click', '#send-button', function () {
		chatBot.sendMessage();
	});

	$(document).on('click', '#chat-bubble', function () {
		if ($('#chat-container').hasClass('closed')) {
			chatBot.openChat();
		} else {
			chatBot.closeChat();
		}
	});
});
