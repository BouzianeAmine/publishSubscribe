"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Socket = /** @class */ (function () {
    function Socket(server) {
        this.io = require('socket.io').listen(server);
    }
    Socket.prototype.connect = function (user) {
        this.io.on('connect', function (socket) {
            socket.newuser = user;
            console.log(user + ' Is connected');
        });
    };
    return Socket;
}());
exports.Socket = Socket;
//# sourceMappingURL=Socket.js.map