import { Message } from '../Published/Message';
import { PublisherBehavior } from '../Publish/PublisherBehavior';

// tslint:disable-next-line:interface-name
export interface SubscriberBehavior {
	subscribe(pub: PublisherBehavior) : void;
	// tslint:disable-next-line:array-type
	receive(): Message<any>[];
}
