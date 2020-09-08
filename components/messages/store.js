const Model=require('./model');

function addMessage(message){
    const myMessage=new Model(message);
    myMessage.save();
}

function getMessage(filterChat){
    return new Promise((resolve, reject)=>{
        let filter={};
        if(filterChat!==null){
            filter={chat:filterChat};
        }
        Model.find(filter)
            .populate('user')
            .exec((error,populated)=>{
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated);
            })
    })
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