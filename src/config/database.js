const mongoose = require('mongoose');

const connectDB = async ()=>{
        await mongoose.connect(
            "mongodb+srv://vennila:QChsjEkiC0fJJsmc@vennilanode.jsho8vo.mongodb.net/devTinder"
        )
}

module.exports = connectDB;

