const { Router } = require('express');
const controller = require('../controllers/SkistoreController');
const router = Router();

router.get('/', controller.getAllSkistores);
router.get('/:id', controller.getSkistoreById);
router.post('/createcity', controller.createSkistore);
router.put('/:id', controller.updateSkistore);
router.delete('/:id', controller.deleteSkistore);

module.exports = router;