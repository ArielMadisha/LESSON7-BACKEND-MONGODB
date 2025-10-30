const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, 'name is required'],
        minlength: 3,
        maxlength: 50
    },
    email : {
        type : String,
        required: [true, 'email is required'],
        unique: true
    },
    age : {
        type: Number,
        default: 18,
        min: [1, 'Age must be positive oe more than zero']
    }
}, {timestamps: true})


const Users = mongoose.model('Users', userSchema)
module.exports = Users