const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/myapp';


mongoose.connect(url, {useNewUrlParser: true, useNewUrlParser: true, useCreateIndex: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


