//express setup
const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const distance = require('gps-distance')
app.use(express.static('./'))
app.use(express.json())

// debug route -- will return true if debugging
app.post('/debug', function (req, res) {
    console.log('the debug route was called with post')
    res.send(JSON.stringify({ success: true }))
})

// sets up the server
if (!process.env.PORT) process.env.PORT = 3000
app.listen(process.env.PORT, function () { console.log('now listening on ' + 
process.env.PORT) })
