var express = require('express');
var router = express.Router();
const users = require('../controller/userController')


router.post('/create', users.create);

router.post('/login', users.login);


module.exports = router;
