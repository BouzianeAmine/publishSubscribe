"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reactable = /** @class */ (function () {
    function Reactable() {
        this.reactions = [];
    }
    Reactable.prototype.reaction = function (react) {
        this.reactions.push(react);
    };
    ;
    return Reactable;
}());
exports.Reactable = Reactable;
//# sourceMappingURL=Reactable.js.map