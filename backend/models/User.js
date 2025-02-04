const mongoose = require("mongoose")
const User = new mongoose.Schema({
    firstName :{
        type :String,
        required : true
    },
    password:{
        type:String,
        required:true,
        private:true,
    },
    lastName :{
        type : String,
        required : false,
    },
    email : {
        type : String,
        required : true,
    },
    username : {
       type : String,
       required:true,
    },
    likeSongs : {
        type : String,
        default : "",
    },
    likedPalylists : {
        type : String,
        default : "",
    },
    suscribedArtists : {
        type : String ,
        default : "",
    },

})
const UserModel = mongoose.model("User" , User )

module.exports = UserModel