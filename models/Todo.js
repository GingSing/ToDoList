const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: { type: String, required: true },
    date_modified: { type: Date, default: Date.now },
    date_added: { type: Date, default: Date.now }
})

module.exports = Todo = mongoose.model('Todo', TodoSchema);