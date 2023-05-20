import $ from 'jquery';
import { MessageClass } from './constans';

class User {
	public input: string | number | string[] | undefined;
	private userInput: JQuery;

	constructor() {
		this.input = '';
		this.userInput = $('#user-input');
		this.userInput.on('input', () => {
			this.input = this.userInput.val();
		});
	}

	private createMessageContainer(message: string, imageUlr: string) {
		return $('<div>', {
			class: MessageClass.CHAT_USER,
			append: $('<div>', {
				class: 'center-chat-user',
				append: [
					$('<span>').addClass(MessageClass.USER).text(message),
					$('<img>')
						.addClass('resize-logo user')
						.attr('src', imageUlr)
				]
			})
		});
	}

	public sendMessage(message: any, container: JQuery<HTMLElement>) {
		const imageUrl = './assets/images/user.png';
		container.append(this.createMessageContainer(message, imageUrl));
	}

	public isInputValid() {
		return typeof this.input === 'string' && this.input.trim() !== '';
	}

	public resetInput() {
		$('#user-input').val('');
	}
}

export { User };
