const http = require('http');
const server = http.createServer((request, response) => {
    const url =req.url;
    const method = rep.method;
    const heeaders = rep.heeaders;
    res.setHeader("Content-Type", "text/html; charset=uft-8");
    if(url === "/message" && method === "POST"){
        res.write(`<html>
                    <head>
                        <title>Test server node js</title>
                    </head>
                    <body> <h1>Xin chao day la trang message</h1> </body>
                </html>`);
     return res.end();

    }
    res.write(`<html>
            <head>
                <title>Test server node js</title>
            </head>
            <body> <h1>Xin chao</h1> </body>
        </html>`);
        res.end();
  });
  server.listen(8080)
  