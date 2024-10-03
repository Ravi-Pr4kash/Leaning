const express = require("express");
const app = express();

// function that returns boolean if the age of the person is more than 14 
function isOldenough(age){
     if(age >= 14){
         return true
     }
     else
     return false; 
}

function isOldenoughMiddleware(req,res,next){
    const age = req.query.age
    if(age >= 14) {
        next();
    }else {
        res.json({
            msg: "sorry you are not of age yet"
        })
    }
}


app.get("/ride",isOldenoughMiddleware, function(req,res){
    
        res.json({
            msg: "you have succcesfully riden the ride "
        })
   
})

app.listen(3000);