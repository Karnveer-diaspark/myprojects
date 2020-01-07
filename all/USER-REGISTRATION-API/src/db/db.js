// const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/myapp';


// mongoose.connect(url, {useNewUrlParser: true, useNewUrlParser: true, useCreateIndex: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})

// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Connected to Mongodb Database');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});
