const mongoose = require('mongoose');

let DB_URL = `mongodb://admin:admin12@ds123603.mlab.com:23603/users-list`

mongoose.connect(DB_URL);

module.exports = mongoose;
