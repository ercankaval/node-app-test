const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log('console message')
    res.send("first app")
})

app.listen(3000)