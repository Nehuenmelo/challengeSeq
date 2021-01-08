const express = require('express');
var bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();

require('./db');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', apiRouter);

 
app.listen(3000 , () => {
    console.log('Servidor arrancado')
});