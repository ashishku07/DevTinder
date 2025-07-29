const express = require("express")

const app = express();




app.get("/user", (req,res) => {
    res.send("i am from get user")
})


app.post("/user:firstName", (req,res) => {
    console.log(req.query);
    
    res.send("i m from post call")
})

app.delete("/user", (req, res) => {
    res.send("hello i m from delete server")
})


app.listen(3000,() =>{
    console.log("server is running");
    
});