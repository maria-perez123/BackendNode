const store=require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('Invalid name');
    }
    const user={
        name,
    };
    return store.add(user);
}

function getMessage(){
    return new Promise((resolve, reject)=>{
        resolve(store.list());
    })
}

module.exports={
    addUser,
    getMessage
}