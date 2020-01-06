const Quote = require('../models/quote')


exports.createQuote = (data, res) => {
    return new Promise((resolve, reject) => {
        const quote = new Quote({
            quote: data.quote
        });
        // Save Note in the database
        quote.save()
            .then(data => {
                return resolve(data)
            }).catch(err => {
                return reject({ message: err.message || "Some error occurred while creating the Note." })
            });
    })
}


exports.findAllQuotes = async (query) => {
    try {
        let quotes = await Quote.find(query)
        if (quotes.length) {
            return quotes
        } else {
            throw { message: "No Data is present" }
        }
    } catch (e) {
        throw { message: e.message || "Something Went Wrong" }
    }
}


// random quote generetion

exports.findRandom = async () => {
    let quotes = await Quote.find()
    const pageSize = 1;
    const datasize = quotes.length;
    let Data = [];
    for (let i = 0; i < pageSize; i++) {
        const random = Math.floor(Math.random() * datasize);
        Data.push(quotes[random]);
    }
    return Data;
}

//delete the quote by id
exports.deleteQuote = async (quoteId) => {
    try {
        let finalRes = await Quote.findByIdAndRemove(quoteId);
        return finalRes;
    } catch (err) {
        throw err;
    }
}
