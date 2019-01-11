const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

const getAllTodos = (req, res) => {
    Todo.find()
        .then(todos => {res.status(200).json(todos)})
        .catch(err=>res.status(400).json({err}));
}

const addTodo = (req, res) => {
    let { todo } = req.body;

    const newTodo = new Todo({
        todo: todo
    })

    newTodo.save()
        .then(() => {
            getAllTodos(req, res);
        })
        .catch(err => res.status(400).json({err}));

}

const changeTodo = (req, res) => {
    let { id, todo } = req.body;
    Todo.findOne({_id:id})
        .then(result => {
            result.todo = todo;
            result.date_modified = Date.now();
            result.save();
            res.status(200).json(result);
        })
        .catch(err => res.status(400).json({err}));
}

const removeTodo = (req, res) => {
    let { id } = req.body;
    Todo.deleteOne({_id:id})
        .then(() => {
            getAllTodos(req, res);
        })
        .catch(err => res.status(400).json({err}));
}


router.get('/getTodos', getAllTodos);
router.post('/addTodo', addTodo);
router.put('/changeTodo', changeTodo);
router.delete('/removeTodo', removeTodo);

module.exports=router;