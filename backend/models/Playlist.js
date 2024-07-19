
const mongoose = require("mongoose")
const Playlist = new mongoose.Schema({
    name :{
    type : String,
    required : true,
    },
    thumbnail : {
        type : String,
        required: true,
    },
    owner :{
        type : mongoose.Types.ObjectId,
        ref : "User",
    },
    songs : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Song",
        },
    ],
    collabrators : [
        {
            type : mongoose.Types.ObjectId,
            ref : "User"
        }
    ]
})
const PlaylistModel = mongoose.model("PlayList" , Playlist)
module.exports = PlaylistModel