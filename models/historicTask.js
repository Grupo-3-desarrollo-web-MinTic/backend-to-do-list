const { Schema, model } = require('mongoose');

const date = new Date();

const created =
  ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
  ("00" + date.getDate()).slice(-2) + "-" +
  date.getFullYear();

const taskSchema = new Schema({
    description: String,
    title: String,
    task: {
        type: String,
        required: true
    },
    modified_at: {
        type: String,
        default: created
    },
    state:{
        type: String,
        default: 'created'
    }
});

module.exports = model('historic_task', taskSchema);