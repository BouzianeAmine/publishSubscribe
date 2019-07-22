import { Message } from "./Message";

export class TextMessage implements Message<string> {
	private container : string;
	
	public constructor(value: string) {
		this.container=value;
	}
	
	public value() : string{
		// TODO Auto-generated method stub
		return this.getValue();
	}
	public getValue() : string{
		return this.container;
	}
	public setValue(value: string) {
		this.container = value;
	}
	
	
}
