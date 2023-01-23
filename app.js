const express = require('express')
const app = express()
const port = 3030

const path = require("path")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve('./views/home.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))