const http = require("node:http");
const fs = require("fs");

const srv = http.createServer((req, res) => {

    if (req.url === "/" || req.url === "/index.html") {
        
        fs.readFile("index.html", (err, data) => {
            if(err) {
                res.writeHead(500);
                res.end("Erro interno do servidor");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {

        res.writeHead(404);
        res.end("Página não encontrada")
    }
})

srv.listen(3000, () => {
    console.log('Servidor funcionando')
})