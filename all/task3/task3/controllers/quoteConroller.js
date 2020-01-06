const quoteRepo = require('../repository/quoteRepo')

// Create and Save a new Note
exports.create = (req, res) => {
    if (req.body.quote) {
        console.log(req.body.quote)
        quoteRepo.createQuote(req.body)
            .then((data) => {
                res.send(data) 
            })
            .catch((err) => {
                res.status(400)
                res.send(err)
            })
    } else {
        res.status(400);
        res.send({ msg: "Quote required" })
    }
};


//get all quotes
exports.findAllQuotes = async (req, res) => {
    try {
        let queryObj = {}     
        let Data = await quoteRepo.findAllQuotes(queryObj)
        res.send(Data)
        console.log(Data)
    } catch (e) {
        res.status(404)
        res.send(e)
    }
};

//get random quotes
exports.getRandom = async(req,res) =>{
    try{
        let Data = await quoteRepo.findRandom()
        res.send(Data)
    }catch (e) {
        console.log(e);
        res.status(404)
        res.send(e)
    }
}


//delete quote by  id
exports.delete = async (req, res) => {
    try {
        if (req.params.quoteId) {
            let FinaRes = await quoteRepo.deleteQuote(req.params.quoteId);
            if (FinaRes) {
                res.status(200);
                res.send({
                    status: "success",
                    DataDeleted: FinaRes
                })
            } else {
                res.status(404)
                res.send({
                    message: "No Data is present with the quoteId: " + req.params.quoteId
                })
            }
        } else {
            throw { message: "quoteId is required" }
        }
    } catch (e) {
        res.status(400)
        res.send({ message: e })
    }
};
