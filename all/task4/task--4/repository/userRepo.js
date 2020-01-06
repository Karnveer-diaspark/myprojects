const User = require('../models/usermodel')
var faker = require('faker');

//create new user
exports.createUser = (data, res) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            name: data.name,
            address: data.address
        });
        user.save()
            .then(data => {
                return resolve(data)
            }).catch(err => {
                return reject({ message: err.message || "Some error occurred while creating the user." })
            });
    })
}

//return all users
exports.findAllUsers = async (query) => {
    try {
        let user = await User.find(query)
        if (user.length) {
            return user
        } else {
            throw { message: "No Data is present" }
        }
    } catch (e) {
        throw { message: e.message || "Something Went Wrong" }
    }
}

//delete user
exports.deleteUser = async (userId) => {
    try {
        let finalRes = await User.findByIdAndRemove(userId);
        return finalRes;
    } catch (err) {
        throw err;
    }
}

//generate fake data
exports.fakeDataGeneration =  async () => {
    try {
       var array = [];
       for(var i=0; i<=9; i++)
       array.push(faker.fake("name : {{name.firstName}},address : {{address.streetName}}"));
       responseArray=JSON.stringify(array);
       return responseArray;
    } catch (e) {
        throw { message: e.message || "Something Went Wrong" }
    }
}


