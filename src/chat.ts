import $ from 'jquery';
import { UtilsClass } from './constans';
import { Bot } from './bot';

class ChatBot {
	private bot: Bot;

	constructor(
		private chatContainer: JQuery,
		private messageContainer: JQuery
	) {
		this.chatContainer = chatContainer;
		this.messageContainer = messageContainer;
		this.bot = new Bot(this.messageContainer);
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
			this.bot.welcomeMessage();
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
