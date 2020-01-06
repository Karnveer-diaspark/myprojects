const userRepo = require('../repository/userRepo')


exports.create = (req, res) => {
  console.log(req.body)
  if (req.body.name && req.body.password) {
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



exports.login =   async(req, res) => {
  console.log(req.body)
  if (req.body.name && req.body.password) {
      let data =  await userRepo.loginUser(req.body)
      console.log("data",data);
     if(data){
         res.send("successfully login");
        }else{
          res.send("Incorrect username or password");
        }
        } else {
      res.status(400);
      res.send({ msg: "Username and Password required" })
  }
};