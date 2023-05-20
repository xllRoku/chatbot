import { MessageClass, optionDictionary } from './constans';

class Bot {
	constructor() {}

	private createMessageContainer(message: string, imageUrl: string) {
		return $('<div>', {
			class: MessageClass.CHAT_BOT,
			append: $('<div>', {
				class: 'center-chat-bot',
				append: [
					$('<span>', { class: MessageClass.BOT, text: message }),
					$('<img>', { class: 'resize-logo', src: imageUrl })
				]
			})
		});
	}

	private isValidOption(
		input: string,
		optionDictionary: { [key: string]: string }
	): boolean {
		return Object.keys(optionDictionary).includes(input);
	}

	public sendMessage(message: any, container: JQuery<HTMLElement>) {
		const imageUrl = './assets/images/bot3.png';
		container.append(this.createMessageContainer(message, imageUrl));
	}

	public WhichOption(input: string, messageContainer: JQuery<HTMLElement>) {
		setTimeout(() => {
			if (this.isValidOption(input, optionDictionary)) {
				const responseMessage = optionDictionary[input];
				this.sendMessage(responseMessage, messageContainer);
			}
		}, 500);
	}
}

export { Bot };
