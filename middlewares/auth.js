const AdminAuth = (req, res, next) => {
    const token = "xyz";
    const matchAuth = token === "xdyz";
    if(!matchAuth){
        res.status(401).send("antiuser")
    }
    else next();
}


const UserAuth = (req, res, next) => {
    const token = 'userauth';
    const  userAuth = token === 'userauth';
    if(!userAuth) {
        res.status(401).send("not authorised");
    
    }
    next();
}
module.exports = AdminAuth, UserAuth;