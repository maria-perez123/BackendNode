const store=require('./store');

function addChat(users){
    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user list');
    }
    const chat={
        users:users,
    };
    return store.add(chat);
}

function getChats(userId){
    return new Promise((resolve, reject)=>{
        resolve(store.list());
    })
}

module.exports={
    addChat,
    getChats
}