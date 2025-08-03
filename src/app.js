const express = require("express")

const AdminAuth = require("../middlewares/auth")
const UserAuth = require("../middlewares/auth")
const connectDB = require("../src/config/database")
const User = require("../src/models/user")

const app = express();


app.post("/signup", async (req, res) => {

const user = new User ({
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    // age: 25,
    // gender: "male",
    // password: "3424323"
});
try { await user.save();
res.send("data saved")
} catch (err) {
res.send("not added")
}

})

connectDB().then(() => {
    console.log("database Conection Esthibasied");
    app.listen(3000,() =>{
    console.log("server is running");
    
});
}).catch((err) => {
  console.error("Database connection failed:", err.message);
});





// // app.get("/admin", AdminAuth)

// // app.get("/admin/DataSent", (req, res) => {
   
// //         res.send("all data Sent")
    

// // })

// app.get("/", (err, req, res, next) => {

// res.send("something went wrotn")

// })



// app.get("/", (err, req, res, next) => {

//     throw new Error("dhdh");

// res.send("user data sent")

// })



// app.get("/user", UserAuth, (req, res) => {
//     res.send('data sent')
// } )


// app.get("/name", (req, res, next) => {
//     // res.send("Hello from frst")
//     next();
// },
//  (req, res, next) => {
//     res.send("Hello from second")
// },
// )



// app.use("/user", (req, res, next) => {
//     // res.send("first handler")
//     next()
// }, (req, res) => {
//     res.send("2nd handler")
// }

// )


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


