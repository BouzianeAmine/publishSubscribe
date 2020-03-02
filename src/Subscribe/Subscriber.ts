import { Message } from '../Published/Message';
import { PublisherBehavior } from '../Publish/PublisherBehavior';
import { SubscriberBehavior } from './SubscriberBehavior';
import { Publisher } from '../Publish/Publisher';

export class Subscriber implements SubscriberBehavior {
	public publishers: Array<PublisherBehavior>

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
