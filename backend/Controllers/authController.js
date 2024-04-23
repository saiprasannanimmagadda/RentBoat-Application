const { query } = require('express')
const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')

const signToken = id => {
    return jwt.sign({ id: id }, process.env.SECRET_STR, { expiresIn: process.env.LOGIN_EXPIRES })
}

exports.signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = signToken(newUser._id);

        res.status(201).json({
            status: "success", token,
            data: { user: newUser }
        })
    } catch (err) {
        res.status(400).json({ status: "failure", message: err.message })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: "failure", message: "Please provide email ID and Password to log in!" })
        }
        const user = await User.findOne({ email: email }).select('+password');


        if (!user || !(await user.comparePasswordInDd(password, user.password))) {
            return res.status(400).json({ status: "failure", message: "Please provide valid email ID and Password to log in!" })
        }

        const token = signToken(user._id);
        res.status(200).json({
            status: 'success',
            token
        })
    } catch (err) {
        res.status(400).json({ status: "failure", message: err.message })
    }
}

