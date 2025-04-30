const express=require('express');
const { createTodoItems, getTodoItems, deleteTodoItems, markTodoItems } = require('../controllers/todoItemsController');

const todoItemsRouter=express.Router();

todoItemsRouter.post('/items',createTodoItems);
todoItemsRouter.get('/getall',getTodoItems);
todoItemsRouter.delete('/delete/:Id',deleteTodoItems);
todoItemsRouter.put('/completed/:Id',markTodoItems);

module.exports=todoItemsRouter;