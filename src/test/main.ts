import { TextMessage } from '../Message/TextMessage';
import { Publisher } from '../Publish/Publisher';
import { Server } from '../Server/Server';
import {Subscriber} from '../Subscribe/Subscriber';
class Main {
    public sub: Subscriber;
    public server: Server;
    constructor() {
        this.sub = new Subscriber();
        this.server = new Server();
        this.sub.subscribe(Publisher.getInstance());
        Publisher.getInstance().publish(new TextMessage('hello'));
        this.sub.receive().forEach((message) => {
            // tslint:disable-next-line:no-console
            console.log(message.value());
        });
        this.server.listen();
    }
}

const main: Main = new Main();