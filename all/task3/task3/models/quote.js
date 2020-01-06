const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    quote: String,    
});

module.exports = mongoose.model('Quote', QuoteSchema);
