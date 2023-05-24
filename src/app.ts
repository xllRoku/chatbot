import $ from 'jquery';
import { ChatBot } from './chat';
import { User } from './user';
import { Bot } from './bot';

$(() => {
	const chatContainer = $('#chat-container');
	const messageContainer = $('#message-container');
	const chatBot = new ChatBot(chatContainer, messageContainer);
	const user = new User(messageContainer);
	const bot = new Bot(messageContainer);

	$(document).on('click', '#send-button', function () {
		user.resetInput();
		if (user.isInputValid()) {
			user.sendMessage(user.input);
			bot.WhichOptionSelectUser(user.input as string);
		}
	});

	$(document).on('click', '#chat-bubble', function () {
		if ($('#chat-container').hasClass('closed')) {
			chatBot.openChat();
		} else {
			chatBot.closeChat();
		}
	});
});
