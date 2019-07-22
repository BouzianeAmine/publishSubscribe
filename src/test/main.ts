import { TextMessage } from '../Message/TextMessage';
import { Publisher } from '../Publish/Publisher';
import { Server } from '../Server/Server';
import {Subscriber} from '../Subscribe/Subscriber';
import { Socket } from '../TransmissionWays/Socket';
class Main {
    public sub: Subscriber;
    public server: Server;
    public socket : Socket;
    constructor() {
        this.sub = new Subscriber();
        this.server = new Server();
        this.sub.subscribe(Publisher.getInstance());
        Publisher.getInstance().publish(new TextMessage('hello'));
        this.sub.receive().forEach((message) => {
            console.log(message.value());
        });
        this.socket=new Socket(this.server.listen());
        this.socket.connect(Publisher.getInstance());
    }
}

const main: Main = new Main();
