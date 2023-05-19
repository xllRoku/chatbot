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

	public sendMessage(message: any, container: JQuery<HTMLElement>) {
		let newMessage: JQuery<HTMLElement>;
		let messageContainer: JQuery<HTMLElement>;

		console.log(message);

		newMessage = $('<span>').addClass(MessageClass.USER).text(message);
		messageContainer = $('<div>').addClass(MessageClass.CHAT_USER);
		newMessage.addClass(MessageClass.USER);

		messageContainer.append(newMessage);
		container.append(messageContainer);
	}

	public isInputValid() {
		return typeof this.input === 'string' && this.input.trim() !== '';
	}

	public resetInput() {
		$('#user-input').val('');
	}
}

export { User };
