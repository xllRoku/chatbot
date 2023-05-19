import $ from 'jquery';
import { UtilsClass, BotMessage, options } from './constans';
import { User } from './user';
import { Bot } from './bot';

class ChatBot {
	private chatContainer: JQuery;
	private messageContainer: JQuery;
	private user: User;
	private bot: Bot;

	constructor(chatContainer: JQuery, messageContainer: JQuery) {
		this.chatContainer = chatContainer;
		this.messageContainer = messageContainer;
		this.user = new User();
		this.bot = new Bot();
	}

	private welcomeMessage(): void {
		this.bot.sendMessage(BotMessage.WELCOME, this.messageContainer);
		options.forEach(option => {
			this.bot.sendMessage(option, this.messageContainer);
		});
	}

	public sendMessage(): void {
		this.user.resetInput();
		if (this.user.isInputValid()) {
			this.user.sendMessage(this.user.input, this.messageContainer);
			this.bot.WhichOption(
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
		}, 400);
		setTimeout(() => {
			this.welcomeMessage();
		}, 600);
	}

	public closeChat(): void {
		$('.lds-ellipsis').removeClass(UtilsClass.CLOSE);
		this.messageContainer.removeClass(UtilsClass.SPACE);
		this.chatContainer
			.removeClass(UtilsClass.OPENED)
			.addClass(UtilsClass.CLOSED);
		this.messageContainer.children().not('.lds-ellipsis').remove();
	}
}

export { ChatBot };
