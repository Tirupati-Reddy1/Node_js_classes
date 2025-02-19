let http=require("http")
let obj={name:"Redy",age:"24"}
const server=http.createServer((req,res)=>{
    res.writeHead(201,"res successfully provided",{"content-type":"application/json"})
    res.write(JSON.stringify(obj));

    res.end("response ended");
})
server.listen("3002",()=>console.log("server running"))