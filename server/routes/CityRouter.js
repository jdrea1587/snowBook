const { Router } = require('express');
const controller = require('../controllers/CityController');
const router = Router();

router.get('/', controller.getAllCities);
router.get('/:id', controller.getCityById);
router.post('/createcity', controller.createCity);
router.put('/:id', controller.updateCity);
router.delete('/:id', controller.deleteCity);

module.exports = router;
