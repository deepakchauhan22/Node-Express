const express = require('express');
const http =require('http');

const hostname = 'localhost';
const port =3000;
const app=express();
app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode =200;
    res.setHeader('Content-Type','text/html')
    res.end('<html><body><h1> Hello! Express Server</h1></body></html>')
})
const server =http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})
//http is a core module
//express is a third party node module
//app means our app will use express
//createserver now takes this app we declared
//expressis adding external fncality whihc http server will use