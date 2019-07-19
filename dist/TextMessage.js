"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextMessage = /** @class */ (function () {
    function TextMessage(value) {
        this.container = value;
    }
    TextMessage.prototype.value = function () {
        // TODO Auto-generated method stub
        return this.getValue();
    };
    TextMessage.prototype.getValue = function () {
        return this.container;
    };
    TextMessage.prototype.setValue = function (value) {
        this.container = value;
    };
    return TextMessage;
}());
exports.TextMessage = TextMessage;
//# sourceMappingURL=TextMessage.js.map