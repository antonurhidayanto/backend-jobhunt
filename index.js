const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//midleware
app.use(bodyParser.json())
app.use((req,res,next)=>{
    console.log("is middleware")
    next()
})


//routing
app.get('/',(req,res)=>{
    console.log("respon get")
    const data = {
        method : "get",
        body:req.query
    }

})
app.post('/',(req,res)=>{
    console.log("respon post")
    const data = {
        method : "post",
        body:req.body
    }
    res.send(data)
})
app.post('/blog',(req,res)=>{
    console.log(req.body)
    const data = {
        method : "post blog",
        body:req.body
    }
    res.send(data)
})
app.put('/',(req,res)=>{
    const data = {
        method : "put",
        body:req.body
    }
    res.send(data)
})
app.delete('/',(req,res)=>{
    const data = {
        method : "delete"
    }
    res.send(data)
})
app.patch('/',(req,res)=>{
    const data = {
        method : "patch"
    }
    res.send(data)
})

app.listen(port,()=>{
    console.log("server running in port : "+port)
})