const { Router } = require('express');
const router = Router();
const { get10Electrodomesticos } = require('../controllers/electrodomesticosControl.js');
router.route('/').get(get10Electrodomesticos)
module.exports = router