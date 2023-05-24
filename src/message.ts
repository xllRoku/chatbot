import { MessageOptions } from './messageOptions';

class Message {
	private container: JQuery<HTMLElement>;

	constructor(container: JQuery<HTMLElement>) {
		this.container = container;
	}

	public createMessage(message: any, options: MessageOptions) {
		return $('<div>', {
			class: options.CHAT,
			append: $('<div>', {
				class: options.CENTER,
				append: [
					$('<span>').addClass(options.WHO).text(message),
					$('<img>')
						.addClass('resize-logo')
						.attr('src', options.imageUrl)
				]
			})
		});
	}

	public sendMessage(message: any, options: MessageOptions) {
		this.container.append(this.createMessage(message, options));
	}
}

export { Message };
