const express = require('express')
const authController = require('../Controllers/authController')

const router = express.Router() // it creates the new router.

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
module.exports = router;