import { MessageOptions } from './messageOptions';

class Message {
	constructor() {}

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
}

export { Message };
