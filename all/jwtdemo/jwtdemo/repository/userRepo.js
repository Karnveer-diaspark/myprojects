const User = require('../models/userModel')


exports.createUser = (data, res) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            name: data.name,
            password: data.password
        });
        user.save()
            .then(data => {
                return resolve(data)
            }).catch(err => {
                return reject({ message: err.message || "Some error occurred while creating the user." })
            });
    })
}



// exports.loginUser = (data,res)=>{
//     User.findOne({name:data.name},(err,user)=> {
//         if(err){
//             console.log(err)
//         }else{
//             if(!user){
//                 console.log("email not exist");
//             }else{
                
//                 if(User.findOne(!{password:data.password})){
//                     console.log("Incorrect password")
//                 }else{
//                     console.log("success")
//                 }
//             }
//         }
//     }) 
// }

// exports.loginUser = async (data,res)=>{
//     User.findOne({name:data.name} && {password:data.password},(err,user)=> {
//         if(err){
//             console.log(err)
//         }else{
//             if(!user){
//                 return res.send("not exist")
//             }else{
//                 return user;
//             }
//         }
//     }) 
// }

exports.loginUser = async (data,res)=>{
       let user = await User.findOne({name:data.name} && {password:data.password}) 
       if(!user){
           return "incorrect"
       }else{
           return user;
       }
    }