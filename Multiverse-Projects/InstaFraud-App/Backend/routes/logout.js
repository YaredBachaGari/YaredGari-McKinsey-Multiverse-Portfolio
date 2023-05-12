require("dotenv").config();
const express = require('express')
const router = express.Router()
const logoutHandler = require('../Controllers/logoutHandler')

router.get('/', logoutHandler.handleLogout )

module.exports = router