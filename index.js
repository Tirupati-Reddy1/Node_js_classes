let http=require("http")
const server=http.createServer((req,res)=>{
    res.write("Andharu Bagundaali anduloo nen undaali....  ");
    res.end("response ended");
})
server.listen("3002",()=>console.log("server running"))