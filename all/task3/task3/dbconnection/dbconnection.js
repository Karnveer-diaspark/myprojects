var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Connected to Mongodb Databse');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});
