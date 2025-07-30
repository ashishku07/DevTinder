const express = require("express")

const app = express();




// app.use("/user/2", (req, res) => {
//     res.send("hello hello bab")
// })


app.post("/user/:userID/:name/:password", (req,res) => {
    console.log(req.params);
     res.send({firstName: "Ashissh" , lastName: "Gupta"})
});

// app.get("/user", (req,res) => {
//     res.send("i am from get user")
// })


// app.post("/user:firstName", (req,res) => {
//     console.log(req.query);
    
//     res.send("i m from post call")
// })

// app.delete("/user", (req, res) => {
//     res.send("hello i m from delete server")
// })


app.listen(3000,() =>{
    console.log("server is running");
    
});