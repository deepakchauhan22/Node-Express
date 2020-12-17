const express = require('express');
const bodyParser = require('body-parser');

const dishRouter= express.Router();
dishRouter.use(bodyParser.json())
//Rest endpoint setup using Express router (chained all methods with dishRouter)
dishRouter.route('/')
.all((req,res,next)=>{
    //here inside we handle incoming request
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Here are all the dishes.');
})
.post((req,res,next)=>{
    res.end("Added "+req.body.name+ ' Dish '+ req.body.description);
})
.put((req,res,next)=>{
    res.end("Your Update(put) is Not Supported");
    res.statusCode =200;
})
.delete((req,res,next)=>{
    res.end('Deleting All Dishes');
}) ;

//for dish ids
dishRouter.route('/:dishId')
.all((req,res,next)=>{
    //here inside we handle incoming request
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send details of' + req.params.dishId);
})

.post((req,res,next)=>{
    res.statusCode =403;
    res.end("Your post is not supported on"+ req.params.dishId);
})

.put((req,res,next)=>{
    res.write('Updating DISH '+ req.params.dishId +'\n');
    res.end("Your Update(put) is done "+ req.body.name);
})

.delete((req,res,next)=>{
    res.end('Deleting the Dish' + req.params.dishId);
})


module.exports = dishRouter;

//dishRouter is an express router we created
//route() takes endpoints as parameter (mounting of express router)
//(by using route() approac we are declaring the endpint at one single ocation)