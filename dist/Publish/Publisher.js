"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Publisher = /** @class */ (function () {
    function Publisher() {
        // tslint:disable-next-line:indent
        this.message = null;
    }
    // tslint:disable-next-line:member-ordering
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
        // TODO Auto-generated method stub
        return this.message;
    };
    // tslint:disable-next-line:member-ordering
    Publisher.instance = null;
    return Publisher;
}());
exports.Publisher = Publisher;
//# sourceMappingURL=Publisher.js.map