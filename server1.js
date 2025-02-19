let http = require("http");
const url=require("url")

let server = http.createServer((req,res)=>{
 const parsedUrl= url.parse(req.url,true)
 console.log(parsedUrl.pathname)
const quantity=parsedUrl.query.quantity;
  if(req.method=="GET"){
    if(parsedUrl.pathname =="/menu"){
      res.writeHead(201,"Response privided",{"content-type":"application/json"})
      res.write(JSON.stringify({veg:"1) gobi, 2)paneer",nonveg:"1) chicken biryani, 2)mutton biryani"}))
      res.end()
    }
    else if(parsedUrl.pathname=="/veg/gobi"){
      res.writeHead(201,"Response privided",{"content-type":"application/json"})
      res.write(JSON.stringify({item:"Gobi",Quantity:quantity, Price:`${quantity} X 150`,GST:"5%",Total_Price:"Price+GST",Mesege:"Thanks for Visiting"}))
      res.end()
    }
    
    else if(parsedUrl.pathname=="/veg/paneer"){
      res.writeHead(201,"Response privided",{"content-type":"application/json"})
      res.write(JSON.stringify({item:"Paneer",Quantity:quantity, Price:`${quantity} x 150`,GST:"5%",Total_Price:"Price+5% GST",Mesege:"Thanks for Visiting"}))
      res.end()
    }
    else if(parsedUrl.pathname=="/nonveg/chicken"){
      res.writeHead(201,"Response privided",{"content-type":"application/json"})
      res.write(JSON.stringify({item:"Chicken Biryani",Quantity:quantity, Price:`${quantity} x 199`,GST:"5%",Total_Price:"Price+5% GST",Mesege:"Thanks for Visiting"}))
      res.end()
    }
    else if(parsedUrl.pathname=="/veg/mutton"){
      res.writeHead(201,"Response privided",{"content-type":"application/json"})
      res.write(JSON.stringify({item:"Muttton Biryani",Quantity:quantity, Price:`${quantity} x 249`,GST:"5%",Total_Price:"Price+5% GST",Mesege:"Thanks for Visiting"}))
      res.end()
    }
    else{
      res.writeHead(201,"Response privided",{"content-type":"application/json"});
      res.write("Search For /menu or /veg/gobi?quantity=your wish or /veg/paneer?quantity=your wish or /nonveg/chicken?quantity= your wish or /nonveg/mutton?quantity=your wish ")

      res.end()
    }
  }
  else{
    res.end("Something went wrong")
  }
})


server.listen("3003",()=>{
  console.log("Server Running")
})

    