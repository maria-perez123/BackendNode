const express=require('express');
const router=express.Router();
const response=require('../../network/response');
const controller=require('./controller')

router.post('/', function(req, res){
    
    controller.addMessage(req.body.user, req.body.message)
        .then(()=>{
            response.succes(req,res, 'creado correctamente', 201)
        })
        .catch(e=>{
            response.error(req, res, 'información invalida', 400, 'error en el controlador');
        })

    // console.log(req.body);
    // console.log(req.query);
    // if(req.query.error=="OK"){
    //     response.error(req, res, 'error inesperado', 500, 'es solo una simulacion de errores');
    // }else{
    //res.send('mensaje ' + req.body.text+ ' añadido correctamente');
    //res.status(201).send();
    //res.status(201).send([{error:'', body:'creado correctamente'}]);
    // response.succes(req,res, 'creado correctamente', 201)
    // }
})
router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "custon-header":"nuestro valor personalizado"
    })
    response.succes(req,res, 'lista de mensajes')
})

module.exports=router;