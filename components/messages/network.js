const express=require('express');
const multer=require('multer');
const config=require('../../config');
const router=express.Router();
const response=require('../../network/response');
const controller=require('./controller')

const upload=multer({
    dest:'public/'+config.filesRoute+'/',
})

router.post('/', upload.single('file'), function(req, res){
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage)=>{
            response.succes(req,res, fullMessage, 201)
        })
        .catch(e=>{
            response.error(req, res, 'información invalida', 400, 'error en el controlador');
        })
})
router.get('/', function(req, res){
    const filterMessage=req.query.chat || null;
    controller.getMessage(filterMessage)
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
router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.succes(req,res,`Usuario ${req.body.user} eliminado`, 200);
    })
    .catch(e=>{
        response.error(req,res,'error interno', 500, e);
    })
})

module.exports=router;