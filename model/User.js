const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
    date:{
        type:Date,
        default : Date.now
    },

})

const User = mongoose.model('TimeSpan',UserSchema);
module.exports = User;