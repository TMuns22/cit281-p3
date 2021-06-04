

const fastify=require("fastify")({
    logger:false,
});
    
    
app.get("/",(request,reply)=>{reply.code(200).header("Content-Type","text/html;charset=utf-8").send("<h1>HellofromFastify!</h1>");});


const listenIP='localhost';
constlistenPort=8082;
fastify.listen(listenPort,listenIP,(err,address)=>{
    if(err){
console.log(err);
process.exit(1);}
    }
console.log(`Server listening on ${address}`
});


`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`

coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });   // option = 1
coinCount(...coins);    // option = 2