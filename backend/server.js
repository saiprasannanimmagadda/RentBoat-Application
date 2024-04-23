const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
//require('dotenv').config();

const app = require('./app')
console.log(app.get('env')) //this gives the environment we are in
// //console.log(process.env)

//Connecting to DataBase
mongoose.connect(process.env.CONN_STR, {
    useNewURLParser: true
}).then((conn) => {
    // console.log(conn);
    console.log("DB Connection Successful");
}).catch((err) => {
    console.log('some error occured')
})


// TO Create a server and also listen 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server has started..')
})