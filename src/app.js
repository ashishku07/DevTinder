const express = require("express")

const app = express();


app.use("/dashboard",(req,res) => {
    res.send(req.body)
});

app.listen(3000,() =>{
    console.log("server is running");
    
});