import { TextMessage } from '../Message/TextMessage';
import { Publisher } from '../Publish/Publisher';
import {Subscriber} from '../Subscribe/Subscriber';
class Main {
    public sub: Subscriber;
    constructor() {
        this.sub = new Subscriber();
        this.sub.subscribe(Publisher.getInstance());
        Publisher.getInstance().publish(new TextMessage('hello'));
        this.sub.receive().forEach((message) => {
            // tslint:disable-next-line:no-console
            console.log(message.value());
        });
    }
}

const main: Main = new Main();