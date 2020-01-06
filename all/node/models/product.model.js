const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    Firstname: 
    {
        type: String,
        required: true,
        max: 100
    },
    Lastname:
    {
        type: String,
        required: true,
        max: 100
    },
    Email:
    {
        type: String,
        required: true,
        max: 100
    },
    Mobile:
    {
        type: String,
        required: true,
        max: 10
    },
    Password:
    {
        type: String,
        required: true,
        max: 100
    },
});

// Export the model
module.exports = mongoose.model('User', UserSchema);