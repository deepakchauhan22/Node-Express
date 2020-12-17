const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will Send you details of All Promotions!')
})

.post((req,res,next)=>{
    res.end("Added "+ req.body.name+ " Promo in " + req.body.description );
})
.put((req,res,next)=>{
    res.end("Update not supported on Promotions")
})
.delete((req,res,next)=>{
    res.end('Deleting all Promotions');
})

promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will Send you details of Promo"+ req.params.promoId)
})

.post((req,res,next)=>{
    res.end("Added "+ req.body.name+ " Promo in " + req.body.description );
})
.put((req,res,next)=>{
    res.write('Updating Promo '+ req.params.promoId +'\n');
    res.end("Added " +req.body.name )
})
.delete((req,res,next)=>{
    res.end('Deleting all Promos');
})
module.exports = promoRouter;