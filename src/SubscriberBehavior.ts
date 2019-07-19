import { PublisherBehavior } from "./PublisherBehavior";
import { Message } from "./Message";


export interface SubscriberBehavior {
	subscribe(pub:PublisherBehavior) : void;
	receive() : Message<any>[];
}
