let http=require("http")
const server=http.createServer((req,res)=>{
    res.write("Hello ra hai namaskaram  ");
    res.end("response ended");
})
server.listen("3002",()=>console.log("server running"))