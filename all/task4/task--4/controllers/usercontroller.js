const userRepo = require('../repository/userRepo')

// create new user
exports.create = (req, res) => {
    console.log(req.body)
    if (req.body.name && req.body.address) {
        userRepo.createUser(req.body)
            .then((data) => {
                res.send(data) 
            })
            .catch((err) => {
                res.status(400)
                res.send(err)
            })
    } else {
        res.status(400);
        res.send({ msg: "User required" })
    }
};


//get all user
exports.getAllUsers = async (req, res) => {
    try {
        let queryObj = {}     
        let Data = await userRepo.findAllUsers(queryObj)
        res.send(Data)
        console.log(Data)
    } catch (e) {
        res.status(404)
        res.send(e)
    }
};


// delete user with id
exports.delete = async (req, res) => {
    try {
        if (req.params.userId) {
            let FinaRes = await userRepo.deleteUser(req.params.userId);
            if (FinaRes) {
                res.status(200);
                res.send({
                    status: "success",
                    DataDeleted: FinaRes
                })
            } else {
                res.status(404)
                res.send({
                    message: "No Data is present with the userId: " + req.params.userId
                })
            }
        } else {
            throw { message: "userId is required" }
        }
    } catch (e) {
        res.status(400)
        res.send({ message: e })
    }
};


//fake data gemeration
exports.getFakeData = async (req, res) => {
    try {
        let Data = await userRepo.fakeDataGeneration()
        res.send(Data)
        console.log(Data)
    } catch (e) {
        res.status(404)
        res.send(e)
    }
};