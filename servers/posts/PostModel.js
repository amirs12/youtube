const db = require('../db');
const { Schema } = require('mongoose');

const postSchema = new db.Schema({
  title: String,
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Post = db.model('Post', postSchema);

module.exports = Post;