import server from "./app";
import config from "./config/config";

server.listen(config.port, () => {
    console.log(`Express server listening on port ${ config.port }`);
});

export default server;
