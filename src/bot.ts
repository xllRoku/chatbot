import {
	BotMessage,
	MessageClass,
	optionDictionary,
	options
} from './constans';
import { Message } from './message';
import { MessageOptions } from './messageOptions';

class Bot {
	private message: Message;
	public imageUrl = './assets/images/bot3.png';
	private botMessageOptions = new MessageOptions(
		MessageClass.CHAT_BOT,
		MessageClass.CENTER_CHAT_BOT,
		MessageClass.BOT,
		this.imageUrl
	);

	constructor(private messageContainer: JQuery<HTMLElement>) {
		this.message = new Message();
		this.messageContainer = messageContainer;
	}

	private isValidOption(
		input: string,
		optionDictionary: { [key: string]: string }
	): boolean {
		return Object.keys(optionDictionary).includes(input);
	}

	public welcomeMessage(): void {
		this.sendMessage(BotMessage.WELCOME);
		options.forEach(option => {
			this.sendMessage(option);
		});
	}

	public sendMessage(message: any) {
		this.messageContainer.append(
			this.message.createMessage(message, this.botMessageOptions)
		);
	}

	public WhichOptionSelectUser(input: string) {
		setTimeout(() => {
			if (this.isValidOption(input, optionDictionary)) {
				let option = input;
				const responseMessage = optionDictionary[option];
				this.sendMessage(responseMessage);
			}
		}, 500);
	}
}

export { Bot };
