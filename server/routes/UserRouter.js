const { Router } = require('express');
const controller = require('../controllers/UserController');
const router = Router();

router.get('/', controller.getAllProfiles);
router.post('/createprofile', controller.createProfile);
router.put('/updateProfile/:id', controller.updateProfile);
router.delete('/getalltrails/:id', controller.deleteProfile);

module.exports = router;
