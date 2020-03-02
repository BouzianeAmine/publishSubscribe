"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextMessage_1 = require("../Published/TextMessage");
var Publisher_1 = require("../Publish/Publisher");
var Subscriber_1 = require("../Subscribe/Subscriber");
var Main = /** @class */ (function () {
    /*public server: Server;
    public socket : Socket;*/
    function Main() {
        this.sub = new Subscriber_1.Subscriber();
        //this.server = new Server();
        this.sub.subscribe(Publisher_1.Publisher.getInstance());
        var msg = new TextMessage_1.TextMessage('Yo');
        Publisher_1.Publisher.getInstance().publish(msg);
        this.sub.receive().forEach(function (message) {
            console.log(message.content());
        });
        /*this.socket=new Socket(this.server.listen());
        this.socket.connect(Publisher.getInstance());*/
    }
    return Main;
}());
var main = new Main();
//# sourceMappingURL=main.js.map