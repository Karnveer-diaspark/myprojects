var express = require('express');
var router = express.Router();
const users = require('../controllers/usercontroller')


router.get('/users/getAllUsers', users.getAllUsers);
router.post('/create', users.create);
router.delete('/users/:userId', users.delete);
router.get('/users/getFakeData', users.getFakeData)


module.exports = router;
