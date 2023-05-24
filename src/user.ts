import $ from 'jquery';

class User {
	public input: string | number | string[] | undefined;
	private userInput: JQuery;
	public imageUrl = './assets/images/user.png';

	constructor() {
		this.input = '';
		this.userInput = $('#user-input');
		this.userInput.on('input', () => {
			this.input = this.userInput.val();
		});
	}

	public isInputValid() {
		return typeof this.input === 'string' && this.input.trim() !== '';
	}

	public resetInput() {
		$('#user-input').val('');
	}
}

export { User };
