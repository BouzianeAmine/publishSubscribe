"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Reactable_1 = require("../Reacts/Reactable");
var TextMessage = /** @class */ (function (_super) {
    __extends(TextMessage, _super);
    function TextMessage(value) {
        var _this = _super.call(this) || this;
        _this.container = value;
        return _this;
    }
    TextMessage.prototype.content = function () {
        return this.container;
    };
    TextMessage.prototype.setValue = function (value) {
        this.container = value;
    };
    return TextMessage;
}(Reactable_1.Reactable));
exports.TextMessage = TextMessage;
//# sourceMappingURL=TextMessage.js.map