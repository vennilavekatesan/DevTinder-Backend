const express = require('express');
const app = express();

app.get('/admin/getUserData', (req,res)=>{
    // need to check the authentication and authorization
    // if the user is not authenticated or authorized, send an error response
    // else send the user data
    const token = 'xyzhhhljl';
    const isAdminAuthorized = token === 'xyz'; // this is just a dummy check, in real application you would check the token against a database or some other service
    if(!isAdminAuthorized) {
        res.status(401).send('Unauthorized: Admin access required');
    }
    res.send('User Data');
})

app.listen(7777, ()=>{
    console.log('Server is running on port 7777');
})




