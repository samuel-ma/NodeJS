

var http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"content-Type": "text/plain"});
    res.end("Hello Node\n");

}).listen(3000);

console.log("Server running at http://localhost:3000");
