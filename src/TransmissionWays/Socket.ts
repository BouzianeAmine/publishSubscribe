import { Subscriber } from "../Subscribe/Subscriber";
import { Publisher } from "../Publish/Publisher";


export class Socket {
    io:any;
    constructor(server:any){
        this.io=require('socket.io').listen(server);
    }

    connect(user: Publisher | Subscriber): void {
        this.io.on('connect',(socket:any) => {
            socket.newuser=user;
            console.log(user+ ' Is connected');
        });
    }
}