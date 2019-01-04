const express = require('express');
const router = express.Router();

const ctrlUser = require('./userCtrl');

router.post('/register', ctrlUser.register);

module.exports = router;