const { Schema, model } = require('mongoose');

const date = new Date();

const created =
  ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
  ("00" + date.getDate()).slice(-2) + "-" +
  date.getFullYear();

const taskSchema = new Schema({
    title: String,
    description: String,
    created_at: {
        type: String,
        default: created
    },
    modified_at: {
        type: String,
        default: ''
    },
    state:{
        type: String,
        default: 'created'
    },
    user:{
        type: String,
        required: true
    }
});

module.exports = model('current_task', taskSchema);