const mongoose = require('mongoose');

const DB_URL = `mongodb://admin:admin12@ds123603.mlab.com:23603/users-list`
// const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/users-list';

mongoose.connect(DB_URL);

module.exports = mongoose