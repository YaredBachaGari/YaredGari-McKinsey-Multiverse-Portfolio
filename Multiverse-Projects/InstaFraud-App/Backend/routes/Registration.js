const express = require('express')
const router = express.Router()
const registration = require('../Controllers/RegistrationController')

router.post('/', registration.registration )

module.exports = router