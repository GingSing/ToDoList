const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoLogSchema = new Schema({
    todo: { type: String, required: true },
    date_modified: { type: Date, required: true},
    date_added: { type: Date, required: true },
    date_completed: { type: Date, default: Date.now }
})

module.exports = TodoLog = mongoose.model('TodoLog', TodoLogSchema);