const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://sujalthakkarit22:LaWVr0OxHAhKsJtT@cluster0.rrtjfpc.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0')

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = connectDB