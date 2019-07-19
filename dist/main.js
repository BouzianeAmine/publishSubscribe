"use strict";
var Main = /** @class */ (function () {
    function Main() {
        this.sub = new Subscriber();
        this.sub.subscribe(Publisher.getInstance());
        Publisher.getInstance().publish(new TextMessage("hello"));
        this.sub.receive().forEach(function (message) {
            console.log(message);
        });
    }
    return Main;
}());
var main = new Main();
//# sourceMappingURL=main.js.map