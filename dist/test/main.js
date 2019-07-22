"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextMessage_1 = require("../Message/TextMessage");
var Publisher_1 = require("../Publish/Publisher");
var Server_1 = require("../Server/Server");
var Subscriber_1 = require("../Subscribe/Subscriber");
var Socket_1 = require("../TransmissionWays/Socket");
var Main = /** @class */ (function () {
    function Main() {
        this.sub = new Subscriber_1.Subscriber();
        this.server = new Server_1.Server();
        this.sub.subscribe(Publisher_1.Publisher.getInstance());
        Publisher_1.Publisher.getInstance().publish(new TextMessage_1.TextMessage('hello'));
        this.sub.receive().forEach(function (message) {
            console.log(message.value());
        });
        this.socket = new Socket_1.Socket(this.server.listen());
        this.socket.connect(Publisher_1.Publisher.getInstance());
    }
    return Main;
}());
var main = new Main();
//# sourceMappingURL=main.js.map