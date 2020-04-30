const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
// mongoose object has a property called Schema. Take that property and assign it to a new variable Schema
const userSchema = new Schema({
    googleId: String
});


mongoose.model('users',userSchema);