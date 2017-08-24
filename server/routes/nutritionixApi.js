var express = require('express');
var router = express.Router();
var nutritionixApi = require('../controllers/nutritionixApi')

router.post('/',nutritionixApi.getData);
router.get('/',nutritionixApi.contohData);

module.exports = router
