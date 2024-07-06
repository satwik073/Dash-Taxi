const express = require('express')
const { getTaxiDetails } = require('../Controllers/taxiCtrl')
const router = express.Router()

router.get('/taxi/all', getTaxiDetails)
module.exports = router