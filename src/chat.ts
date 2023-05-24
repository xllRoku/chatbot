import $ from 'jquery';
import { UtilsClass, MessageClass } from './constans';
import { User } from './user';
import { Bot } from './bot';
import { Message } from './message';
import { MessageOptions } from './messageOptions';

class ChatBot {
	private chatContainer: JQuery;
	private messageContainer: JQuery;
	private user: User;
	private bot: Bot;
	private message: Message;

	constructor(chatContainer: JQuery, messageContainer: JQuery) {
		this.chatContainer = chatContainer;
		this.messageContainer = messageContainer;
		this.user = new User();
		this.bot = new Bot();
		this.message = new Message(this.messageContainer);
	}

	public sendMessage(): void {
		this.user.resetInput();
		if (this.user.isInputValid()) {
			const messageOptions = new MessageOptions(
				MessageClass.CHAT_USER,
				MessageClass.CENTER_CHAT_USER,
				MessageClass.USER,
				this.user.imageUrl
			);
			this.message.sendMessage(this.user.input, messageOptions);
			this.bot.WhichOptionSelectUser(
				this.user.input as string,
				this.messageContainer
			);
		}
	}

	public openChat(): void {
		this.chatContainer
			.removeClass(UtilsClass.CLOSED)
			.addClass(UtilsClass.OPENED);
		this.messageContainer.addClass(UtilsClass.CENTER_SPINNER);
		this.showWelcomeMessage();
	}

	private showWelcomeMessage(): void {
		setTimeout(() => {
			$('.lds-ellipsis').addClass(UtilsClass.CLOSE);
			this.messageContainer
				.removeClass(UtilsClass.CENTER_SPINNER)
				.addClass(UtilsClass.SPACE);
		}, 800);
		setTimeout(() => {
			this.bot.welcomeMessage(this.messageContainer);
		}, 1000);
	}

	public closeChat(): void {
		const ellipsisLoader = $('.lds-ellipsis');
		const messageContainer = this.messageContainer;
		const chatContainer = this.chatContainer;

		ellipsisLoader.removeClass(UtilsClass.CLOSE);
		messageContainer.removeClass(UtilsClass.SPACE);
		chatContainer
			.removeClass(UtilsClass.OPENED)
			.addClass(UtilsClass.CLOSED);
		messageContainer.children().not('.lds-ellipsis').remove();
	}
}

export { ChatBot };
