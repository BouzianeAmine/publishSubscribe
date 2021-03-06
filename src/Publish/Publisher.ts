import { Message } from '../Published/Message';
import { PublisherBehavior } from '../Publish/PublisherBehavior';

export class Publisher implements PublisherBehavior {
// tslint:disable-next-line:indent
	private message: any = null ;
	public static instance: any = null;
	
	public  static getInstance(): Publisher {
		if (Publisher.instance == null) {
           	 Publisher.instance = new Publisher();
		}
  		return Publisher.instance;
	}

	private constructor() {}
	
	public publish(value: Message<any>): void {
		this.message = value;
	}

	public getMessage(): Message<any> {
		return this.message;
	}

}
