const User = require('../models/product.model');
const cors = require("cors");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// post
exports.user_create = function (req, res) { 
    let user = new User(
        {
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Email: req.body.Email,
            Mobile: req.body.Mobile,
            Password: req.body.Password, 
        }
    );
    user.save(function (err,user) {
        if (err) {
            return (err);
        }
        res.send(user)
    })
};

// get
exports.user_details = function (req, res) {
    User.findById(req.body.id, function (err, user) {
        if (err) return;
        res.send(user);
    })
};

//put
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated successfully.', user);
    });
};

//delete
exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//getAll
exports.getAllUsers = function(req,res){

    User.find({},function(err,user){
        console.log(user.Email);
        console.log(user.Password);
        console.log(user);
        console.log(err);
        res.send(user);
       
    });
}


 //user login
exports.user_login = function(req, res){
    // console.log(req.body.Email);
    
     User.findOne({Email:req.body.Email},function(err,user){
            console.log(user.Email);
            // console.log(user.Password);
            console.log(err);
           //res.send("Correct");
        //    if(user.Email ==req.body.Email) {
        //        res.send("Correct")
        //    }
        //    return (err)
        res.send(user);
        });
}
