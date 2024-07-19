import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import {Howl , Howler} from'howler'
import TextwithHover from '../components/shared/TextwithHover'
import PlaylistView from '../components/shared/PlaylistView'
import LoggedInContainer from '../container/LoggedInContainer'
const cardData=[
    {
        title:"Musical Piano" ,
        description:"Slwo and classical music" ,
        imgUrl:"https://images.unsplash.com/photo-1715604723676-7e7fb8607478?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title:"Musical Piano"
         , description:"Slwo and classical music"
        , imgUrl:"https://images.unsplash.com/photo-1531323386183-43890b5c766d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title:"Musical Piano"
        , description:"Slwo and classical music" 
        , imgUrl:"https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title:"Musical Piano",
        description:"Slwo and classical music" , 
        imgUrl:"https://images.unsplash.com/photo-1526857833023-721f5005ab32?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title:"Musical Piano", description:"Slwo and classical music" ,
        imgUrl:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const LoggedInHome =() => {
return(
    <LoggedInContainer currentActiveScreen= "home">
        <PlaylistView title={"Focus"} cardData={cardData}/>
        <PlaylistView title={"Spotify Playlists"} cardData={cardData}/>
       <PlaylistView title={"Song of India"} cardData={cardData}/>
    </LoggedInContainer>
)
}


export default LoggedInHome