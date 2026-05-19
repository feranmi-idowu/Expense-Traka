const express = require("express");

const app = express();

const authRoutes = require("./routes/authRoutes")

app.use(express.json());

app.use("/api/auth", authRoutes)

const {signup} = require("../backend/controllers/authController")

app.get("/", (req, res)=>{
    res.send("backend is running");
});


port = 5000
app.listen(5000, ()=> {
    console.log('server is running');
});

