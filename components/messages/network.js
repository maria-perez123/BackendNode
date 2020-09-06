const express=require('express');
const router=express.Router();
const response=require('../../network/response');
const controller=require('./controller')

router.post('/', function(req, res){
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.succes(req,res, fullMessage, 201)
        })
        .catch(e=>{
            response.error(req, res, 'información invalida', 400, 'error en el controlador');
        })
})
router.get('/', function(req, res){
    controller.getMessage()
    .then((messagelist)=>{
        response.succes(req,res, messagelist, 200);
    })
    .catch(e=>{
        response.error(req,res,'unexpected error', 500, e);
    })
})
router.patch('/:id', function(req, res){
    controller.updateMessage(req.params.id,req.body.message)
    .then((data)=>{
        response.succes(req,res, data, 200);
    })
    .catch(e=>{
        response.error(req,res,'error interno', 500, e);
    })
})

module.exports=router;