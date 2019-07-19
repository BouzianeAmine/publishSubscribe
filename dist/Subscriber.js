"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber = /** @class */ (function () {
    function Subscriber() {
        this.publishers = new Array();
    }
    Subscriber.prototype.subscribe = function (pub) {
        this.publishers.push(pub);
    };
    Subscriber.prototype.receive = function () {
        return this.publishers.map(function (pub) { return pub.getMessage(); });
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
//# sourceMappingURL=Subscriber.js.map