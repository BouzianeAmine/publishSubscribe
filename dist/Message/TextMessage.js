"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextMessage = /** @class */ (function () {
    function TextMessage(value) {
        this.container = value;
    }
    TextMessage.prototype.content = function () {
        // TODO Auto-generated method stub
        return this.container;
    };
    TextMessage.prototype.setValue = function (value) {
        this.container = value;
    };
    return TextMessage;
}());
exports.TextMessage = TextMessage;
//# sourceMappingURL=TextMessage.js.map