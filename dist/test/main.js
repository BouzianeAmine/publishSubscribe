"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextMessage_1 = require("../Message/TextMessage");
var Publisher_1 = require("../Publish/Publisher");
var Server_1 = require("../Server/Server");
var Subscriber_1 = require("../Subscribe/Subscriber");
var Main = /** @class */ (function () {
    function Main() {
        this.sub = new Subscriber_1.Subscriber();
        this.server = new Server_1.Server();
        this.sub.subscribe(Publisher_1.Publisher.getInstance());
        Publisher_1.Publisher.getInstance().publish(new TextMessage_1.TextMessage('hello'));
        this.sub.receive().forEach(function (message) {
            // tslint:disable-next-line:no-console
            console.log(message.value());
        });
        this.server.listen();
    }
    return Main;
}());
var main = new Main();
//# sourceMappingURL=main.js.map