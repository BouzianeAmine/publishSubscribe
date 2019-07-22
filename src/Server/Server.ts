// tslint:disable-next-line:no-var-requires
const express = require('express');

export class Server {
    private app: any ;
    private host: string = '';
    private port: number = 0;
    private listening: boolean = false;
    constructor() {
        require('dotenv').config();
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;
        this.host = process.env.HOST || 'localhost';
    }

    public listen() {
        this.listening = true;
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Listening at http://${this.host}:${this.port}/`);
        });
    }

    public getServer(): any {
        return this.app;
    }
}