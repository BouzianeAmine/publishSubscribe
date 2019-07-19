import {Subscriber} from '../Subscriber';
import { Publisher } from '../Publisher';
import { TextMessage } from '../TextMessage';
class Main {
    sub:Subscriber;
    constructor(){
        this.sub=new Subscriber();
        this.sub.subscribe(Publisher.getInstance());
        Publisher.getInstance().publish(new TextMessage("hello"));
        this.sub.receive().forEach(message => {
            console.log(message.value());
        })
    }
}

var main: Main =new Main();