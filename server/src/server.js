const http = require("http");
const app = require("./app");
const mongooseServer = require("./services/mongoose")



const server = http.createServer(app);

const startServer = async () => {
    await mongooseServer()
}

const port = 8000;

server.listen(port, () => {
    console.log("connected on port " + port)
})

startServer();