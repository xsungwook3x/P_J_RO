const express =require('express');
// const usersRouter = require('./users');
const todosRouter=require('./todos');
const routinesRouter=require('./routines')
// const routinesRouter=require('./routines');
const router = express.Router();

router.use('/todo',todosRouter);

router.use('/routine',routinesRouter);

module.exports=router;