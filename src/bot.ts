import { BotMessage, MessageClass } from './constans';

class Bot {
	constructor() {}

	public sendMessage(message: any, container: JQuery<HTMLElement>) {
		let newMessage: JQuery<HTMLElement>;
		let messageContainer: JQuery<HTMLElement>;

		console.log(message);

		newMessage = $('<span>').addClass(MessageClass.BOT).text(message);
		messageContainer = $('<div>').addClass(MessageClass.CHAT_BOT);
		newMessage.addClass(MessageClass.BOT);

		messageContainer.append(newMessage);
		container.append(messageContainer);
	}

	public WhichOption(input: string, messageContainer: JQuery<HTMLElement>) {
		setTimeout(() => {
			if (input === '1') {
				const responseMessage = BotMessage.RESPONSE_ONE;
				this.sendMessage(responseMessage, messageContainer);
			}
		}, 500);
	}
}

export { Bot };
