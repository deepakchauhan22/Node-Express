const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will Send you details of All Leaders!')
})

.post((req,res,next)=>{
    res.end("Added "+ req.body.name+ " Leader in " + req.body.description );
})
.put((req,res,next)=>{
    res.end("Update not supported on Leaders")
})
.delete((req,res,next)=>{
    res.end('Deleting all Leaders');
})

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will Send you details of Leader"+ req.params.leaderId)
})

.post((req,res,next)=>{
    res.end("Added "+ req.body.name+ " Leader in " + req.body.description );
})
.put((req,res,next)=>{
    res.write('Updating Leader '+ req.params.leaderId +'\n');
    res.end("Added " +req.body.name )
})
.delete((req,res,next)=>{
    res.end('Deleting all Leaders');
})
module.exports = leaderRouter;