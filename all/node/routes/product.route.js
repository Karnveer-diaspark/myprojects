
const express = require('express');
const router = express.Router();
const cors = require("cors");
// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
router.use(cors());

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

// router.post('/create',  product_controller.product_create);
router.post('/create', (req,res) => {
    console.log("Entered");
    product_controller.user_create(req,res);
});

//router.get('/:id', product_controller.user_details);
router.get('/getById', (req, res) =>{
    console.log("pd");
    product_controller.user_details(req,res);
});


router.get('/getAllUsers', (req, res)=>{
    console.log('entered');
    product_controller.getAllUsers(req, res);
});

// router.put('/:id/update', product_controller.user_update);
router.put('/:id/update',(req,res) => {
    console.log("pu")
    product_controller.user_update(req,res);
})

 router.delete('/delete/:id', product_controller.user_delete);


//  router.post('/login',(req,res) => {
//      console.log("Login");
//      product_controller.user_login(req,res);
//  });

router.post('/userlogin', (req,res) => {
    
    product_controller.user_login(req,res);
    console.log("Entered");
});

module.exports = router;