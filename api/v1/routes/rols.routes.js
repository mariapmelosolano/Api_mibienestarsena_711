const db = require('../../../models');
const { Router } = require('express');
const rolController = require('../../../controllers/rolController');

const router = Router();

router.get('/', rolController.getAllRols);
router.get('/:rolId', rolController.getRol);
router.post('/', rolController.createRol);
router.put('/:rolId', rolController.updateRol);
router.delete('/:rolId', rolController.deleteRol);

module.exports = router;