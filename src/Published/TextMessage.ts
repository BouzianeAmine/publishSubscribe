import { Message } from "./Message";
import { Reactable } from "../Reacts/Reactable";

export class TextMessage extends Reactable implements Message<string> {
	private container: string;

	public constructor(value: string) {
		super()
		this.container = value;
	}
	public content(): string {
		return this.container;
	}
	public setValue(value: string) {
		this.container = value;
	}


}
