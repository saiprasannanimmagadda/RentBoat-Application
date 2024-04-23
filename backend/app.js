const express = require('express');
const cors = require('cors');
let app = express();

const rentboatRouter = require('./Routes/rentboatRoutes')
const authRouter = require('./Routes/authRouter')

app.use(express.json())

app.use(cors());

//creating a middleware to attach a timestamp to the request

app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next();  // this is function which will call next middleware function in the stack
})



//mounting routes to the path or using routes
app.use('/api/v1/rentboat', rentboatRouter) // this middleware will be applied to that specific path only
app.use('/api/v1/users', authRouter)

module.exports = app