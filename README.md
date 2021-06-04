### Description

You will be creating a “coinage” code module that is capable of calculating the total value of coin objects. After completing the “coinage” code module functionality, you will then update the “server” code file as a true Node.js web server using the Fastify package. The updated “server” file will display an initial web page with web links to to test the “coinage” code. The initial web page will be loaded from a file.

### Code

**p3-module.js**

function validDenomination(coin) {
    let array = [1, 5, 10, 25, 50, 100]
  return false !== array.indexOf(coin) => 0
}
console.log(validDenomination(5));

function valueFromCoinObject(obj) {
 return array.indexOf(coin, 1)
}

function valueFromArray(valueFromCoinObject()) {
 return array.reduce(total) => 5
}

function cointCount(coinage) {
    return true
}

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins))

**p3-server.js**



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
