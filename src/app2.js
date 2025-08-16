const express = require('express');
const app = express();

app.use('/', (req,res)=>{
    res.send('Hello Route Handler!');    
})

// to make a get request
// multiple route handlers
app.get('/user', (req, res, next)=>{
    console.log('1st Route Handler');
    // res.send('1st Response');   commenting this because it will prevent the next handler from executing
    next();
}, 
(req, res)=>{
    console.log('2nd Route Handler');
}, 
(req, res)=>{
    console.log('3rd Route Handler');
    res.send('Final Response'); // This will be the final response sent to the client
});


// here the above final response won't be work because the response 'hello Route Handler!' is already sent, 
// reason is that the route is '/' so it will check for the '/' route first and send the response, 
// so the next handlers won't be executed
app.listen(7777, ()=>{
    console.log('Server is running on port 7777');
})




