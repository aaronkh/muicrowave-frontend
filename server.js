//express setup
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const request = require('request')
var https = require('https')
app.use(express.static('./'))
app.use(express.json())

// debug route -- will return true if debugging
app.post('/debug', function (req, res) {
    console.log('the debug route was called with post')
    res.send(JSON.stringify({ success: true }))
})
// get microwave status
app.get('/status', function(req, res) {
    res.send(JSON.stringify({busy: false}))
})
app.post('/image-recognition', function(req, res){
    res.send(JSON.stringify({name: 'popcorn', time: 6}))
})
if (!process.env.PORT) process.env.PORT = 3000
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(process.env.PORT, function () { console.log('now listening on ' + 
process.env.PORT) })
