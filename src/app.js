const express= require('express');
const app= express();

//to make a get request 

app.get('/user', (req,res)=>{
    res.send({name:'vennila',age:'23', city:'chennai'});
})

// app.get('/user/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send({message: `User ID is ${userId}`});
// });

app.get('/user/:userid/:name/:password', (req, res) => {
    console.log(req.params);
    const { userid, name, password } = req.params;
    res.send({message: `User ID: ${userid}, Name: ${name}, Password: ${password}`});
});

//to make a post request
app.post('/user',(req,res)=>{
    res.send({message:'User created successfully'});
})

// app.use((req,res)=>{
//     res.send('Hello, World!');
// });


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});