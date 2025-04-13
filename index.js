const express = require('express')
const User = require('./MOCK_DATA.json')

const app = express()

const PORT = 8000

//Routes
app.listen(PORT, ()=>{console.log("Server started at: ${PORT}");
})