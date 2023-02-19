const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());


app.use(express.json());
app.use(express.urlencoded());


app.use('/api',require('./routes/index'));


app.listen(port,(err)=>{
    console.log('Server is up');
})