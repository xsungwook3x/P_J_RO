const express=require('express');
const router = express.Router();

const addTodo= require('./addTodo');
const deleteTodo = require('./deleteTodo');
const findTodo = require('./findTodo');
const updateTodo = require('./updateTodo');


router.post('/',addTodo);

router.get('/:user_id',findTodo)

router.post('/update',updateTodo)

router.delete('/:id',deleteTodo)

module.exports = router;