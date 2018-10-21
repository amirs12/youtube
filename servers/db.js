const mongoose = require('mongoose');

const DB_URL = `mongodb://admin:admin12@ds123603.mlab.com:23603/users-list`
// const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/users-list';

mongoose.connect(DB_URL);

module.exports = mongoose;

/*
db.getCollection('users').insertMany([
    {"videos": [
       {"videoId": "1", "videoLoading": "false", "videoLink": "htttp//..." "videoName": "narcos", "authorName": "some author", "published": "Published on Dec 1, 2017",
         "authorAvatar": "htttp//...", "comments": [
            {"commentId": "1", "commenterAvatar": "htttp//...", "commentDate": "10 months ago" "commenterName": "some commenter",
             "commentLikes": "351", "commentDislikes": "3", "commentBody": "Lorem ipsum"}
         ], "thumbNail": "htttp//..."
       }
    ], "videosLoading": "false"},
    "name": "array2"
])
*/
