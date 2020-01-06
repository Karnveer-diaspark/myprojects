const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: 
    {
        type: String, 
        required: true, 
        max: 100
    },
    password: 
    {
        type: String, 
        required: true, 
        max: 100
    }  

});
module.exports = mongoose.model('User', UserSchema);
