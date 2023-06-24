require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5500;

app.get('/', (req, res)=> {
    res.send("Hello from express Js")
})

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));
