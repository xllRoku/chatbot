class MessageOptions {
	constructor(
		public CHAT: string,
		public CENTER: string,
		public WHO: string,
		public imageUrl: string
	) {
		this.CHAT = CHAT;
		this.CENTER = CENTER;
		this.WHO = WHO;
		this.imageUrl = imageUrl;
	}
}

export { MessageOptions };
