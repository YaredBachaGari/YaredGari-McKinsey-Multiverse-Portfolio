const express = require('express')
const router = express.Router()
const Authorization = require('../Controllers/LoginController')

router.post('/', Authorization.LoginHandeler )

module.exports = router