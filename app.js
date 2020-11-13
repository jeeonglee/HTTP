const http = require("http")

http.createServer(function(req, res) {
    res.writeHead(200, {"content-type":"text/html"})
    
    switch(req.url){
        case "/":
            res.end("Voce esta na pagina Home")
            break
        case "/contato":
            res.end("Voce esta na pagina Contato")
            break
        default:
            res.end("Voce esta em nosso Servidor")            
    }
}).listen(3000)

