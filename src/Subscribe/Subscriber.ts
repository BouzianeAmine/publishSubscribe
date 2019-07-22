import { Message } from '../Message/Message';
import { PublisherBehavior } from '../Publish/PublisherBehavior';
import { SubscriberBehavior } from './SubscriberBehavior';

export class Subscriber implements SubscriberBehavior {
	private publishers: PublisherBehavior[];

	public constructor() {
		this.publishers = new Array<PublisherBehavior>();
	}
	public subscribe(pub: PublisherBehavior ): void {
		this.publishers.push(pub);
	}

	public receive(): Array<Message<any>> {
		return this.publishers.map((pub: PublisherBehavior) => pub.getMessage());
	}

}
