const express = require('express');
const bodyParser = require('body-parser');
const User = require('./routes/product.route'); // Imports routes for the products
const app = express();


const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myapp';
mongoose.connect(url, {useNewUrlParser: true, useNewUrlParser: true, useCreateIndex: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', User);


let port = 4000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});