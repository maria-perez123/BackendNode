const db=require('mongoose');
const Model=require('./model');

db.Promise=global.Promise;
db.connect('mongodb+srv://user:user1234@cluster0.p2dnd.mongodb.net/telegrom?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});
console.log('[db] conectada con exito')

function addMessage(message){
    //list.push(message);
    const myMessage=new Model(message);
    myMessage.save();
}

async function getMessage(){
    //return list;
    const messages= await Model.find();
    return messages;
}

async function updateText(id, message){
    const foundmessage= await Model.findOne({
        _id:id,
    });
    //findById(id) también funciona
    foundmessage.message=message;
    const newMessage = await foundmessage.save();
    return newMessage;
}

module.exports={
    add: addMessage,
    list:getMessage,
    updateText: updateText,
    //get
    //update
    //delete
}