const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res,) {
    res.send('API is working properly');
})

app.listen(process.env.PORT || 5000)