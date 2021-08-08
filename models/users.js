const { Schema, model } = require('mongoose');

const date = new Date();

const created =
  ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
  ("00" + date.getDate()).slice(-2) + "-" +
  date.getFullYear();

const userSchema = new Schema({
    name: String,
    email: String,
    created_at: {
        type: String,
        default: created
    },
    is_validated: {
        type: Boolean,
        default: false
    },
    is_deleted:{
        type: Boolean,
        default: false
    },
    last_seen:{
        type: String,
        default: null
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = model('users_info', userSchema);