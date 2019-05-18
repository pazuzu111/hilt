import mongoose = require('mongoose');

//connected to cloud cluster - replace uri with your own instance of mongodb atlas
const uri = 'mongodb+srv://hilton:hotels@cluster0-zrzzl.mongodb.net/test?retryWrites=true'

mongoose.connect(uri,  { useNewUrlParser: true }, (err: any) => {
    err? console.log(err) : console.log('Database: Mongodb connected!!!')
})

