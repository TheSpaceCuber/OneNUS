const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var happeningsSchema = new Schema ({
    channel_name: String,
    message_id: Number,
    message_link: String,
    message_date: String,
    message_content: String,
    message_day: Number,
    message_month: Number,
    message_year: Number
});


module.exports = mongoose.model('happenings', happeningsSchema);
