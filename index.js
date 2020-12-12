const express = require('express');
const http =require('http');
const morgan =require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./router/dishRouter')
const hostname = 'localhost';
const port =3000;
const app=express();
app.use(morgan('dev')) ;
app.use(bodyParser.json());
app.use('/dishes',dishRouter) //this means any request coming to /dishs endpoint will be hanled by dish router

                            // Normal Rest endpoint setup
                            // app.all('/dishes', (req,res,next)=>{
                                //here inside we handle incoming request
                            //     res.statusCode =200;
                            //     res.setHeader('Content-type','text/plain');
                            //     next();
                            // });

                            // app.get('/dishes',(req,res,next)=>{
                            //     res.end('Here are all the dishes.');
                            // });

                            // app.post('/dishes',(req,res,next)=>{
                            //     res.end("Added "+req.body.name+ ' Dish '+ req.body.description);
                            // });

                            // app.put('/dishes',(req,res,next)=>{
                            //     res.end("Your Update(put) is Not Supported");
                            //     res.statusCode =200;
                            // });

                            // app.delete('/dishes',(req,res,next)=>{
                            //     res.end('Deleting All Dishes');
                            // });

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send details of' + req.params.dishId);
})

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode =403;
    res.end("Your post is not supported on"+ req.params.dishId);
})

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating DISH '+ req.params.dishId +'\n');
    res.end("Your Update(put) is done "+ req.body.name);
})

app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting the Dish' + req.params.dishId);
})

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

//whenever someone does a ppost - details come into body parser then req, then req.body to database
//http is a core module
//express is a third party node module
//app means our app will use express
//whenever wwe need to use a middleware we do app.use() like body parser and morgan)
//createserver now takes this app we declared
//end endsthe response and sends response to client
//expressis adding external fncality whihc http server will use
//express.static alllows to server static html files from local
// morgan is an express middleware used to log information
//Morgan is used for logging request details//dev means development version
//inside app.all first paramer is endpint second is callback(req,res,next)
//next() will look for another endpoints of http method speicification