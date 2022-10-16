const express=require('express');
const addRoutine = require('./addRoutine');
const deleteRoutine = require('./deleteRoutine');
const findRoutine = require('./findRoutine');
const router = express.Router();


router.post('/',addRoutine);

router.get('/:user_id', findRoutine)

router.delete('/:id/:user_id',deleteRoutine)

module.exports = router;