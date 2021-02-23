import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import compression from "compression";
import initRoutes from "./routes";


class App {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.config();
    }

    config() {
        // support application/json type post data
        this.app.use(bodyParser.json({limit: "10mb"}));
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: true,
            limit: "10mb"
        }));

        this.app.use(compression());

        // init cross origin headers
        this.app.use(cors());

        // init app routes
        initRoutes(this.app);
    }
}

export default new App().server;
