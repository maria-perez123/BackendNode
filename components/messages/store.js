const Model=require('./model');

function addMessage(message){
    const myMessage=new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter={};
    if(filterUser!==null){
        filter={user:filterUser};
    }
    const messages= await Model.find(filter);
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

async function removeMessage(id){
    return Model.deleteOne({
        _id:id,
    });
}

module.exports={
    add: addMessage,
    list:getMessage,
    updateText: updateText,
    remove: removeMessage,
}