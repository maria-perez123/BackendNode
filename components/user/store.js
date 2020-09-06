const Model=require('./model');

function addUser(user){
    const myUser=new Model(user);
    return myUser.save();
}

async function getMessage(){
    const messages= await Model.find();
    return messages;
}

module.exports={
    add: addUser,
    list:getMessage,
}