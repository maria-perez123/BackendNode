const express=require('express');
const router=express.Router();
const response=require('../../network/response');
const controller=require('./controller')

router.post('/', function(req,res){
    controller.addChat(req.body.users)
        .then(data=>{
            response.succes(req,res,data,201);
        })
        .catch(e=>{
            response.error(req,res,'Internal error', 500, e);
        });
})

router.get('/:userId', function(req, res){
    controller.getChats(req.params.userId)
    .then((users)=>{
        response.succes(req,res, users, 200);
    })
    .catch(e=>{
        response.error(req,res,'unexpected error', 500, e);
    })
})

module.exports=router;