const express = require('express');
const app = express();

const {adminAuth, userAuth} = require('./middlewares/auth.js')


// handle auth middleware for all GET, POST,PUT,PATCH,DELETE requests

app.use('/admin', adminAuth);

app.use('/user/login', (req,res)=>{
    //login doesn't need auth so we are not using userAuth 
    // so this is why the middleware is used like if the auth is need we an use like the below user/data if doesn't need we are not calling
    res.send('login successfully');
})

app.use('/user/data', userAuth, (req, res)=>{
    res.send('Data is sent');
})

app.get('/admin/getUserData', (req,res)=>{
    res.send('User Data');
})

app.get('/admin/getDelete', (req, res)=>{
    res.send('User Deleted');
})

app.listen(7777, ()=>{
    console.log('Server is running on port 7777');
})




