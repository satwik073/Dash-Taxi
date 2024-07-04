const express = require('express');
const { registerVehicleAndOwner, letUserLoginWithDetails, getAllTaxiOwnerProfiles } = require('../Controllers/taxiAndOwnerCtrl');
const router = express.Router();

router.post('/register/owner', registerVehicleAndOwner)
router.post('/login/owner', letUserLoginWithDetails)
router.get('/owners', getAllTaxiOwnerProfiles)
module.exports = router