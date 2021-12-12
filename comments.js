const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    addtext: {
        type: String,
        required: true
    }
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);