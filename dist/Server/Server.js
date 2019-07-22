"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
var express = require('express');
var Server = /** @class */ (function () {
    function Server() {
        this.host = '';
        this.port = 0;
        this.listening = false;
        require('dotenv').config();
        this.app = express();
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