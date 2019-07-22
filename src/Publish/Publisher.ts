import { Message } from '../Message/Message';
import { PublisherBehavior } from '../Publish/PublisherBehavior';

export class Publisher implements PublisherBehavior{
	private message: any = null ;
    // tslint:disable-next-line:member-ordering
    public static instance: any = null;

	private constructor() {}
	
	public  static getInstance(): Publisher {
	   if (Publisher.instance == null) {
           	 Publisher.instance = new Publisher();
            }
            return Publisher.instance;
	}
	
	public publish(value: Message<any>) : void{
		this.message=value;
	}

	
	public getMessage() : Message<any> {
		// TODO Auto-generated method stub
		return this.message;
	}
	
}