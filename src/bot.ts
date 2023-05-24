import {
	BotMessage,
	MessageClass,
	optionDictionary,
	options
} from './constans';
import { Message } from './message';
import { MessageOptions } from './messageOptions';

class Bot {
	public imageUrl = './assets/images/bot3.png';

	private isValidOption(
		input: string,
		optionDictionary: { [key: string]: string }
	): boolean {
		return Object.keys(optionDictionary).includes(input);
	}

	public welcomeMessage(messageContainer: JQuery<HTMLElement>): void {
		const messageOptions = new MessageOptions(
			MessageClass.CHAT_BOT,
			MessageClass.CENTER_CHAT_BOT,
			MessageClass.BOT,
			this.imageUrl
		);
		const message = new Message(messageContainer);
		message.sendMessage(BotMessage.WELCOME, messageOptions);
		options.forEach(option => {
			message.sendMessage(option, messageOptions);
		});
	}

	public WhichOptionSelectUser(
		input: string,
		messageContainer: JQuery<HTMLElement>
	) {
		const messageOptions = new MessageOptions(
			MessageClass.CHAT_BOT,
			MessageClass.CENTER_CHAT_BOT,
			MessageClass.BOT,
			this.imageUrl
		);

		setTimeout(() => {
			if (this.isValidOption(input, optionDictionary)) {
				let option = input;
				const responseMessage = optionDictionary[option];
				const message = new Message(messageContainer);
				message.sendMessage(responseMessage, messageOptions);
			}
		}, 500);
	}
}

export { Bot };
