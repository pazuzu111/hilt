"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
//connected to cloud cluster - replace uri with your own instance of mongodb atlas
const uri = 'mongodb+srv://hilton:hotels@cluster0-zrzzl.mongodb.net/test?retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    err ? console.log(err) : console.log('Database: Mongodb connected!!!');
});
//# sourceMappingURL=index.js.map