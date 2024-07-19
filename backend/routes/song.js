const express = require("express")
const  router = express.Router()
const passport = require("passport")
const Song = require("../models/Songs")
const User = require("../models/User")
router.post('/create' , passport.authenticate("jwt",{session:false}), async (req,res) => {
   
   const {name , thumbnail,track ,} = req.body
   if(!name || !thumbnail || !track){
    return res.status(301).json({err : "For create a song details are missing"})
   }
   const artist = req.user._id
   const songDetails = {name , thumbnail, track , artist}
   const createdSong  = await Song.create(songDetails)
   return res.status(200).json(createdSong)
})
router.get('/get/mysongs' , passport.authenticate("jwt" , {session:false}) , async (req,res) =>{
     const currentUser = req.user
     const songs = await Song.find({artist : req.user._id}).populate("artist")
     return res.status(200).json({data:songs})
})

router.get('/get/me',passport.authenticate("jwt",{session :false}) , async (req,res) => {
     const {artistId} = req.user._id;
     
     const song = await Song.find({artist : artistId}).populate("owner")
     return res.status(200).json({data :song})

})

router.get('/get/artist/:artistId',passport.authenticate("jwt",{session :false}) , async (req,res) => {
     const {artistId} = req.params.artistId;
     const artist = await User.find({_id : artistId})
     if(!artist){
      return res.status(301).json({err : "Artist doesn't exists "})
     }
     const song = await Song.find({artist : artistId})
     return res.status(200).json({data :song})

})
router.get('/get/songname/:songname', passport.authenticate("jwt",{session :false}), async (req,res) => {
      const{songname} = req.params
      const songs = await Song.find({name : songname}).populate("artist")
      return res.status(200).json({data : songs})
      
})
module.exports= router