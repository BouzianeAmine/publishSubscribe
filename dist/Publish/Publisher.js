"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Publisher = /** @class */ (function () {
    function Publisher() {
        // tslint:disable-next-line:indent
        this.message = null;
    }
    Publisher.getInstance = function () {
        if (Publisher.instance == null) {
            Publisher.instance = new Publisher();
        }
        return Publisher.instance;
    };
    Publisher.prototype.publish = function (value) {
        this.message = value;
    };
    Publisher.prototype.getMessage = function () {
        return this.message;
    };
    Publisher.instance = null;
    return Publisher;
}());
exports.Publisher = Publisher;
//# sourceMappingURL=Publisher.js.map