const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { addUniv,  singleUniv, updateUniv,deleteUniv,allUnivs,  showUnivs } = require('../controller/univController');
const router = express.Router();

//univ Routes
// /universities/create
router.post('/universities/create',isAuthenticated,isAdmin, addUniv);
router.get('/universities',showUnivs)
router.get('/universities/:id',singleUniv)
router.put('/universe/upd/:univ_id',updateUniv)
router.delete('/universe/del/:id',deleteUniv)


module.exports = router;