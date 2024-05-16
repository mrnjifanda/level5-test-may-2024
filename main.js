const express = require('express');
const mongoose = require('mongoose');
const port  = 3000;

mongoose.connect('mongodb://localhost:27017/app_contact').then(()=>{
    const app = express();
    app.use(express.json());


        app.listen(port , () => {
        console.log('application listening on http://localhost:' + port);
    });
})
