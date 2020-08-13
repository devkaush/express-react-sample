const express = require('express')
const app = express()
const path = require('path')
const  cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/apiReq', function(req, res,) {
    res.send('API is working properly');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(process.env.PORT || 5000)