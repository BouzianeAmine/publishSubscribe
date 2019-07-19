import { PublisherBehavior } from "./PublisherBehavior";
import { Message } from "./Message";
import { SubscriberBehavior } from "./SubscriberBehavior";

export class Subscriber implements SubscriberBehavior{
  
	private publishers : Array<PublisherBehavior>; 
	
	public constructor() {
		this.publishers=new Array<PublisherBehavior>();
	}
	public subscribe(pub : PublisherBehavior ) : void{
		this.publishers.push(pub);
	}


	public receive(): Message<any>[]{
		return this.publishers.map((pub: PublisherBehavior)=>pub.getMessage());
	}

}
