require('dotenv').config()
const bodyParser = require('body-parser')
const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db/dbconfig')
const port = process.env.PORT || 5000

//import routes for the products
const product = require('./routes/account.route')
const app = express()
connectDB()

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send("Hello world")
})

//use that router
app.use('/products', product)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log('server is running on the port http://localhost:' + port);
    })

})

mongoose.connection.on('error', err => {
    console.log(err);
})