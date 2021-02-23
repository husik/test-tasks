// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");

const bodyParser = require("body-parser");
const app = express();

const server = http.createServer(app);
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, "public")));

// Catch all other routes and return the index file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

const port = 4000;
app.set("port", port);

server.listen(port, () => console.log(`API running on localhost:${port}`));
