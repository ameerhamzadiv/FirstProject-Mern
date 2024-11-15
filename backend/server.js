require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/users');

const app = express();



//middleware
// any request convert into json
app.use(express.json());

app.use((request, response, next) => {
    console.log(request.path, request.method);
    next();
})

//route
app.use('/api/users', UserRoutes);

// connect to db
mongoose.connect(process.env.MANGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Db & port is running', process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})

