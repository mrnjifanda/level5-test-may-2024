require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.APP_PORT;
const database_url = process.env.DATABASE_URL;
console.log(database_url);
mongoose.connect(database_url).then(() => {

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    const contactRoute = require('./routes/contact.route');
    const userRoute = require('./routes/user.route');

    app.use('/api/contact', contactRoute);
    app.use('/api/user', userRoute);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}).catch(error => {

    console.log(error);
});
