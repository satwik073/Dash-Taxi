const express = require('express');
const { registerUserData, getUserLogin, getAllProfiles } = require('../Controllers/userCtrl');
const router = express.Router();


router.post('/register', registerUserData);
router.post('/login', getUserLogin)
router.get('/profiles/all', getAllProfiles)
module.exports = router