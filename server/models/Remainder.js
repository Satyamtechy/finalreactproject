const mongodb=require('mongoose');

const courseSchema = new mongodb.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    PhoneNo: {
        type: Number
    },
});

const Remainder = mongodb.model('remainder', courseSchema);

module.exports = Remainder;