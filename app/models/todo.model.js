const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name: String,
/*    description : String */
    age: Number,
    major: String
},
{
    timestamps:true
}
);
module.exports = mongoose.model('Todo', TodoSchema);