const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middlewares
// app.use('/posts',()=>{
//     console.log('Middleware for posts');
// });

app.use(bodyParser.json());
//Routes
app.get('/',(req,res)=>{
    res.send('We are on home');
});

const postsRoutes = require('./routes/posts')
app.use('/posts',postsRoutes);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,
         useUnifiedTopology: true },
         () =>{
    console.log('connected to DB!');
});

app.listen(3000);