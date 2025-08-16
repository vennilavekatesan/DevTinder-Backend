const adminAuth = (req,res, next )=>{
    console.log('auth is checking');
    const token = 'xyz';
    const isAdminAuthorized = token === 'xyz'; // this is just a dummy check, in real application you would check the token against a database or some other service
    if(!isAdminAuthorized) {
        res.status(401).send('Unauthorized: Admin access required');
    }
    else 
        next();   
}

const userAuth = (req,res, next )=>{
    console.log('User auth is checking');
    const token = 'xyz';
    const isAdminAuthorized = token === 'xyz'; // this is just a dummy check, in real application you would check the token against a database or some other service
    if(!isAdminAuthorized) {
        res.status(401).send('Unauthorized: Admin access required');
    }
    else 
        next();   
}

module.exports={
    adminAuth,
    userAuth
}