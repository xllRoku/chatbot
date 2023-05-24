import $ from 'jquery';
import { Message } from './message';
import { MessageOptions } from './messageOptions';
import { MessageClass } from './constans';

class User {
	public input: string | number | string[] | undefined;
	private message: Message;
	private userInput: JQuery;
	public imageUrl = './assets/images/user.png';
	private userMessageOptions = new MessageOptions(
		MessageClass.CHAT_USER,
		MessageClass.CENTER_CHAT_USER,
		MessageClass.USER,
		this.imageUrl
	);

	constructor(private messageContainer: JQuery<HTMLElement>) {
		this.input = '';
		this.userInput = $('#user-input');
		this.userInput.on('input', () => {
			this.input = this.userInput.val();
		});
		this.message = new Message();
		this.messageContainer = messageContainer;
	}

	public sendMessage(message: any) {
		this.messageContainer.append(
			this.message.createMessage(message, this.userMessageOptions)
		);
	}

	public isInputValid() {
		return typeof this.input === 'string' && this.input.trim() !== '';
	}

	public resetInput() {
		$('#user-input').val('');
	}
}

export { User };
