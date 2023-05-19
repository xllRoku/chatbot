import $ from 'jquery';
import * as chat from './chat';

$(() => {
	$(document).on('click', '#send-button', function () {
		chat.sendMessage();
	});

	$(document).on('click', '#chat-bubble', function () {
		if ($('#chat-container').hasClass('closed')) {
			chat.openChat(chat.welcomeMessage);
		} else {
			chat.closeChat();
		}
	});
});
