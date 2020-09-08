const express=require('express');
const app=express();
const server=require('http').Server(app);

const bodyParser=require('body-parser');
const socket=require('./socket');
const db=require('./db');
const router=require('./network/routes');

db('mongodb+srv://user:user1234@cluster0.p2dnd.mongodb.net/telegrom?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

socket.connect(server);
//app.use(router);

router(app);

app.use('/app', express.static('public'));

//app.listen(3000);
server.listen(3000, function(){
    console.log('la aplicación está escuchando en localhost:3000')
});
