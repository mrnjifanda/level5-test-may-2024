const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./Routes/user.route')
const contactRoute = require('./Routes/contact.route')
const port = 5000

mongoose.connect('mongodb://127.0.0.1/contact_management').then(() => {

    const app = express()
    
    app.use(cors())
    app.use(express.json())
    app.use('/', userRoute)
    app.use('/', contactRoute)

    app.listen(port, () => {
        console.log(` App listening at http://localhost:${port}`);
    })
}).catch((error) =>{
    console.log(error);
})


