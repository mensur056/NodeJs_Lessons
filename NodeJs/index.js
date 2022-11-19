const http = require("http");
const port = 5000;
const host = "127.0.0.1";

const apiServer = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("First APi Server");
});

apiServer.listen(port, host, () => {
  console.log("sdsdfsdfsfsdf");
});
