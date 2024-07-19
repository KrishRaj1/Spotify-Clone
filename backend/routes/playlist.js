const express = require("express")
const router = express.Router()
const PlayList = require("../models/Playlist")
const passport = require("passport")
const User = require("../models/User")
const Song = require("../models/Songs")

router.post('/create' , passport.authenticate("jwt",{session :false}) , async (req,res) => {
      const {name , thumbnail ,songs } = req.body
      if(!name || !thumbnail || !songs){
        return res.status(301).json({err : "Some field are missing"})
      }
      const currentUser = req.user
      const playlistDetails = {name , thumbnail,owner : currentUser._id,songs,collabrators : []}
      const createdPlaylist = await PlayList.create(playlistDetails)
      return res.status(200).json({createdPlaylist})
})
router.get('/get/playlistId/:playlistId' , passport.authenticate("jwt",{session : false}), async (req,res) => {
    const playlistId = req.params.playlistId
    const playlist = await PlayList.findOne({_id : playlistId}).populate({path: "songs"
       ,populate:{
        path:"artist"
       }, 
    })

    if(!playlist){
        return res.status(301).json({err : "Ivalid Id"})
    }
    return res.status(200).json(playlist)
})
router.get('/get/artist/:artistId' , passport.authenticate("jwt",{session : false}) ,async (req,res) => {
    console.log(req.params.artistId)
    const artistId = req.params.artistId
    const artist = await User.findOne({_id : artistId})
    if(!artist){
        return res.status(301).json({err :  "Invalid artist"})
    }
    const playlists = await PlayList.find({owner : artistId})
    return res.status(200).json({data : playlists})
})
router.post('/add/song' , passport.authenticate("jwt",{session : false}), async (req,res) => {
    const currentUser = req.user
    const {playlistId , songId} = req.body
    const playlist = await PlayList.findOne({_id : playlistId})
    if(!playlist){
        return res.status(301).json({err : "Playlist doesn't exits"})
    }
    if(!playlist.owner.equals (currentUser.id)&& !playlist.collabrators.includes(currentUser._id) ){
        return res.status(301).json({err : "User doesn't have permission"})
    }
    const song = await Song.findOne({_id : songId})
    if(!song){
        return res.status(301).json({err : "Song doesn't exits"})
    }
    playlist.songs.push(songId)
    await playlist.save()
    return res.status(200).json(playlist)
})
module.exports = router