const express = require('express')
const router = express.Router()
const handleRefreshToken = require('../Controllers/refreshTokenController')

router.get('/', handleRefreshToken.handleRefreshToken )

module.exports = router