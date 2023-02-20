const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define account schema
const AccountSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    accountNo: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        require: true
    },
})


//Export the Model
module.exports = mongoose.model('AccountHolder', AccountSchema)