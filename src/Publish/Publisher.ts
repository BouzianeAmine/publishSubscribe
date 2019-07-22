import { Message } from '../Message/Message';
import { PublisherBehavior } from '../Publish/PublisherBehavior';

export class Publisher implements PublisherBehavior{
	private message: any = null ;
    // tslint:disable-next-line:member-ordering
    public static instance: any = null;

	private constructor() {}
	
	public  static getInstance(): Publisher {
		if (Publisher.instance == null) {
            // Le mot-clé synchronized sur ce bloc empêche toute instanciation
            // multiple même par différents "threads".
            // Il est TRES important.
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
