const express = require('express');
const router = express.Router();

const TodoLog = require('../../models/TodoLog');

const getAllTodoLogs = (req, res) => {
    TodoLog.find()
        .then(todoLogs => {res.status(200).json(todoLogs)})
        .catch(err=>res.status(400).json({err}));
}

router.get('/getTodoLogs', getAllTodoLogs);

module.exports=router;