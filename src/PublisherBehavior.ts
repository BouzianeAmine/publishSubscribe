import { Message } from "./Message";


export interface PublisherBehavior {
	publish(value: Message<any>) : void;
	getMessage() : Message<any>;
}
