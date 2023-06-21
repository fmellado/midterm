const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
/*    description : String */
    age: Number,
    major: String
},
{
    timestamps:true
}
);
module.exports = mongoose.model('Student', StudentSchema);