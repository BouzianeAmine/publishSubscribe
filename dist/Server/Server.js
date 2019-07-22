"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.host = '';
        this.port = 0;
        this.listening = false;
        require('dotenv').config();
        this.app = express_1.default();
        this.port = Number(process.env.PORT) || 3000;
        this.host = process.env.HOST || 'localhost';
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.listening = true;
        this.app.listen(this.port, function () {
            console.log("Listening at http://" + _this.host + ":" + _this.port + "/");
        });
    };
    Server.prototype.getServer = function () {
        return this.app;
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=Server.js.map