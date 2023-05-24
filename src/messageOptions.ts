class MessageOptions {
	public CHAT: string;
	public CENTER: string;
	public WHO: string;
	public imageUrl: string;

	constructor(chat: string, center: string, who: string, imageUrl: string) {
		this.CHAT = chat;
		this.CENTER = center;
		this.WHO = who;
		this.imageUrl = imageUrl;
	}
}

export { MessageOptions };
