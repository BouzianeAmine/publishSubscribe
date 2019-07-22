import { Message } from '../Message/Message';

// tslint:disable-next-line:interface-name
export interface PublisherBehavior {
	publish(value: Message<any>): void;
	getMessage(): Message<any>;
}
