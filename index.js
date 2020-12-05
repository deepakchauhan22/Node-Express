const express = require('express');
const http =require('http');
const morgan =require('morgan')

const hostname = 'localhost';
const port =3000;
const app=express();
app.use(morgan('dev')) 

app.use(express.static(__dirname+'/public'))

app.use((req,res,next)=>{
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
//express.static alllows to server static html files from local
// morgan is an express middleware used to log information
//Morgan is used for logging request details//dev means development version