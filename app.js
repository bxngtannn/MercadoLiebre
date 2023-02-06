const express = require('express')
const app = express()
const port = 3030

const path = require("path")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve('./views/home.html'));
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve('./views/register.html'));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve('./views/login.html'));
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))