const { Router } = require('express');
const controller = require('../controllers/UserController');
const router = Router();

router.get('/', controller.getAllProfiles);
router.get('/:id', controller.getUserProfileById);
router.post('/createprofile', controller.createProfile);
router.put('/:id', controller.updateProfile);
router.delete('/:id', controller.deleteProfile);

module.exports = router;
