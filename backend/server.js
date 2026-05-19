const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("backend is running");
});


app.post("/signup", (req, res)=>{

    const {email, phoneNumber, password, confirmPassword} = req.body

    if (!email || !phoneNumber){
        return res.status(400).json({
            message: "Email and phoneNumber required"
        })
    }

    if (!email || !phoneNumber || !password){
        return res.status(400).json({
            message: "All fields required"
        })
    }

    if (password !== confirmPassword){
        return res.status(400).json({
            message: "password does not match"
        })
    }
    
        console.log(req.body);
        
    res.status(201).json({
        message: "user created successfully"
    })
})

port = 5000
app.listen(5000, ()=> {
    console.log('server is running');
});

