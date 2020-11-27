const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');
const productsRouter = require('./routes/products');


app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    next();
});

app.use('/', indexRouter);
app.use('/clients', clientsRouter);
app.use('/products', productsRouter);


app.listen(4000);