const express = require('express');
const connectDB= require('./config/database.js')
const User = require('./models/user.js');
const app = express();

app.post('/signup', async(req, res) => {
    const userObj= {
        firstName:'yuvaraj',
        lastName:'venkatesan',
        emailId:'yuvaraj@example.com',
    } 
   const user = new User(userObj);
   await user.save();
   res.send('User created successfully');
})


connectDB()
 .then(()=>{
    console.log('Database connection successful');
    app.listen(7777, ()=>{
      console.log('Server is running on port 7777');
    });
  })
  .catch(err=>{
    console.error('Database cannot be connected');
});













