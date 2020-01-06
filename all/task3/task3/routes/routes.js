var express = require('express');
var router = express.Router();
const quotes = require('../controllers/quoteConroller')


router.get('/quotes/getAllQuotes', quotes.findAllQuotes);
router.post('/quotes/create', quotes.create);
router.get('/quotes/getRendom', quotes.getRandom);
router.delete('/quotes/:quoteId', quotes.delete);


module.exports = router;
