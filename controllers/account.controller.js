const AccountHolder = require('../models/account.model')

exports.testApp = function (req, res) {
    res.send("This is Test Controllers")
}

//create Account logic
exports.createAccount = function (req, res, next) {
    let product = new AccountHolder({
        name: req.body.name,
        accountNo: req.body.accountNo,
        branch: req.body.branch,
        ifsc: req.body.ifsc
    })

    //Now save the recieved data into Mongodb
    product.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send('AccountHolder created success')
    })
}


// Read account info

exports.accountDetails = function (req, res) {
    AccountHolder.findById(req.param.id, function (err, product) {
        if (err) return next(err)
        res.send(product)
    })

}

//Update account info
exports.updateAccount = function (req, res) {

    AccountHolder.findByIdAndUpdate(req.params.id, { $set: req.body },
        function (err, product) {
            if (err) return next(err)
            res.send('AccountHolder updated successfully')
        })
}

//Delete Account Info
exports.deleteProduct = function (req, res) {
    AccountHolder.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err)
        res.send('Deleted Successfully')
    })
}