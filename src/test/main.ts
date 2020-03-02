import { TextMessage } from '../Published/TextMessage';
import { Publisher } from '../Publish/Publisher';
import { Server } from '../Server/Server';
import {Subscriber} from '../Subscribe/Subscriber';
import { Socket } from '../TransmissionWays/Socket';
import { Reactable } from '../Reacts/Reactable';
class Main {
    public sub: Subscriber;
    /*public server: Server;
    public socket : Socket;*/
    constructor() {
        this.sub = new Subscriber();
        //this.server = new Server();
        this.sub.subscribe(Publisher.getInstance());
        const msg=new TextMessage('Yo')
        Publisher.getInstance().publish(msg);
        this.sub.receive().forEach((message) => {
            console.log(message.content());
        });
        
        /*this.socket=new Socket(this.server.listen());
        this.socket.connect(Publisher.getInstance());*/
    }
}

const main: Main = new Main();
