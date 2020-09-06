const db=require('mongoose');

db.Promise=global.Promise;
// url='mongodb+srv://user:user1234@cluster0.p2dnd.mongodb.net/telegrom?retryWrites=true&w=majority';
async function connect(url){
    await db.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
    console.log('[db] conectada con exito')
}

module.exports=connect;