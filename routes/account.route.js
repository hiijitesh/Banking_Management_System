const express = require('express')
const router = express.Router();

//for router we need controllers
const accountController = require('../controllers/account.controller')

//check files are communicating with each other or not
router.get('/test', accountController.testApp)

router.post('/create', accountController.createAccount)

router.get('/:id', accountController.accountDetails)

router.put('/update/:id', accountController.updateAccount)

router.delete('/delete/:id', accountController.deleteProduct)

//export this file so that it can be used in app.js
module.exports = router