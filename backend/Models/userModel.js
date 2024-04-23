const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field'] // We are validating duartion ans name fields  
    },
    email: {
        type: String,
        required: [true, 'Email is required field'], // We are validating duartion ans name fields 
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required field'], // We are validating duartion ans name fields 
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your Password'], // We are validating duartion ans name fields 
        validate: {
            validator: function (val) {
                return val == this.password;
            },
            message: 'Password and Confirm does not match!'
        }
    }

})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();

})

userSchema.methods.comparePasswordInDd = async function (password, passwordDB) {
    return await bcrypt.compare(password, passwordDB);
}

const User = mongoose.model('User', userSchema);

module.exports = User;