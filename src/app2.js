const express = require('express');
const app = express();

const {adminAuth, userAuth} = require('./middlewares/auth.js')


// handle auth middleware for all GET, POST,PUT,PATCH,DELETE requests

// app.use('/admin', adminAuth);

// app.use('/user/login', (req,res)=>{
//     //login doesn't need auth so we are not using userAuth 
//     // so this is why the middleware is used like if the auth is need we an use like the below user/data if doesn't need we are not calling
//     res.send('login successfully');
// })

// app.use('/user/data', userAuth, (req, res)=>{
//     res.send('Data is sent');
// })

// app.get('/admin/getUserData', (req,res)=>{
//     res.send('User Data');
// })

// app.get('/admin/getDelete', (req, res)=>{
//     res.send('User Deleted');
// })


// Error handling

app.get('/', (err, req, res, next)=>{          
//here when we check for the err it is always at the first if we use (next,req,res,err) 
// it will consider next as err because when we use err we need to use that is in the first order
    if(err)
    {
      res.status(500).send('Something went wrong')
    }
})

app.get('/getUserData', (req,res)=>{
    try{
    throw new Error('hjtlhlrljr');
    res.send('user data');
    }
    catch{
        res.status(500).send('some error contact support team');
    } 
})

// even though when we use '/', if we try to use the getUserData it is working
//  because in the '/' there is no error we have 
// so it will check for the other request this is how express will check sequence is matter 


app.listen(7777, ()=>{
    console.log('Server is running on port 7777');
})



const url ="mongodb+srv://vennila:<db_password>@vennilanode.jsho8vo.mongodb.net/"




