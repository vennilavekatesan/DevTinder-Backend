const express= require('express');
const app= express();

//to make a get request 
// multiple route handlers 
app.get('/user',
    (req,res, next)=>{
        console.log('1st Route Handler');
        res.send('1st Response');
        next(); // pass control to the next handler
    },
    (req,res)=>{
        console.log('2nd Route Handler');
        // This handler will not be executed because the response has already been sent in the first handler
        // it won't throw any error in the postman or browser, but it will throw an error in the terminal console "Error: Can't set headers after they are sent."
        // So if you are using next() again it will call this response but it will throw an error, because the response has already been sent
        res.send('2nd Response');
    }
)

// also wise versa if you use the next() before sending the response in the first handler, 
// it will call the second handler and then second handler response will be sent 
// but first handler is also sending response which will throw an error same like the abover terminal console error

app.get('/user',
    (req,res, next)=>{
        console.log('1st Route Handler');
        next(); // pass control to the next handler
        res.send('1st Response');
        // if you send the response here, it will throw an error in the terminal console "Error: Can't set headers after they are sent."
    },
    (req,res)=>{
        console.log('2nd Route Handler');
        // This handler will not be executed because the response has already been sent in the first handler
        // it won't throw any error in the postman or browser, but it will throw an error in the terminal console "Error: Can't set headers after they are sent."
        // So if you are using next() again it will call this response but it will throw an error, because the response has already been sent
        res.send('2nd Response');
    }
)

// you can also use the multiple route handlers for the same route
// app.get('/user', RH,RH2,RH3,RH4,RH5,RH6,RH7)
// where RH is the route handler function
// also you can wrap them in an array like this 
// app.get('/user', [RH,RH2,RH3,RH4,RH5,RH6,RH7])

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});