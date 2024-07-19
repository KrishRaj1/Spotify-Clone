require("dotenv").config()
const express = require("express")
const User = require("./models/User")
const authRoutes = require("./routes/auth")
const songRoutes = require("./routes/song")
const playlistRoutes = require("./routes/playlist")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport") 
const cors = require("cors")   
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())
let opts = {}
 mongoose.connect("mongodb+srv://shivharekrishraj:"+process.env.KEY+"@cluster0.nofsvmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" , 
{
   useNewUrlParser : true,
   useUnifiedTopology : true,
   bufferTimeoutMS: 30000

}).then((x) => {
    console.log("Mongo DB is connected")
}).catch((err) => {
    console.log("MongoDB is not connected")
})

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
   passport.use (new JwtStrategy(opts, function  (jwt_payload, done) {
      User.findOne({_id : jwt_payload.identifier}, function(err, user) {
        console.log(User._id);
        console.log("JWT Payload:", jwt_payload);
        
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


const PORT = 4000
app.get('/',(req,res) => {
    res.send("hello")
})
app.use('/auth' , authRoutes)
app.use('/song', songRoutes )
app.use('/playlist' , playlistRoutes)
app.listen(PORT , ()=> {
    console.log(`This is the port no ${PORT}`)
})