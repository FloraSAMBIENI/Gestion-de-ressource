const express = require('express');
const {createRessource, getRessources, updateRessource, deleteRessource, getRessource } = require('../controllers/ressourceController');
const router = express.Router();

router.post('/createRessource', createRessource);
router.get('/getRessources', getRessources);
router.patch('/updateRessource/:id', getRessource, updateRessource);
router.delete('/deleteRessource/:id', getRessource, deleteRessource);


module.exports = router;