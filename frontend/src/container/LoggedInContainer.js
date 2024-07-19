import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText'
import { Icon } from '@iconify/react'
import { useContext, useLayoutEffect,useRef, useState } from 'react'
import {Howl , Howler} from'howler'
import TextwithHover from '../components/shared/TextwithHover'
import PlaylistView from '../components/shared/PlaylistView'
import songContext from '../Contexts/songConetext'
import CreatePlaylistModal from '../modals/CreatePlaylistmodal'
import AddToPlaylistModal from '../modals/AddToPlaylistModal'
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper'

const LoggedInContainer = ({children , currentActiveScreen} ) => {
    const [createPlaylistModalOpen , setCreatePlayListModalOpen] = useState(false)
    const [addToPlaylistModalOpen , setaddToPlayListModalOpen] = useState(false)
    const {currentSong , setCurrentSong , soundPlayed,setSoundPlayed , isPaused , setIsPaused} = useContext(songContext)
    console.log(currentSong);
    
    const firstUpdate = useRef(true)
    useLayoutEffect(() =>{
        if(firstUpdate.current){
            firstUpdate.current = false
            return
        }
        if(!currentSong){
            return
        }
        console.log("here")
        changeSong(currentSong.track)
        
    },[currentSong && currentSong.track])
    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id
        const payload = {playlistId,songId}
        const response = await makeAuthenticatedPOSTRequest("/playlist/add/song" , payload)
        if(response._id){
            setaddToPlayListModalOpen(false)
        }

    }
    const playSound =() => {
        if(!soundPlayed){
            return
        }
        soundPlayed.play()
    }
    const changeSong =(songSrc) => {
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
         setSoundPlayed(sound)
         sound.play();
         setIsPaused(false)
       }
   
   const pauseSound = () => {
    soundPlayed.pause()
   }
   const togglePlayPause = () => {
    if(isPaused){
        playSound()
        setIsPaused(false)
    }
    else{
        pauseSound()
        setIsPaused(true)
    }
   }
    return(
        <div className='w-full h-full bg-app-black'>
           { createPlaylistModalOpen && <CreatePlaylistModal closeModal ={ () => {setCreatePlayListModalOpen(false)}}  />}
           { addToPlaylistModalOpen && <AddToPlaylistModal closeModal ={ () => {setaddToPlayListModalOpen(false)}}  addSongToPlaylist={addSongToPlaylist} />}
            <div className={`${currentSong?"h-9/10" : "h-full"} w-full flex`}>
        <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10 '>
            <div>
            <div className='logo p-5' >
           <img src={spotify_logo} alt='Spotify Logo' width={125}></img> 
           </div>
           <div className='py-5'>
            <IconText logo={"material-symbols:home"}
            text = {"Home"}  targetLink={"/home"}
            active = {currentActiveScreen === "home"}/>

            <IconText logo={"material-symbols:search-rounded"}
            text = {"Search"} 
            targetLink={"/search"} active = {currentActiveScreen === "search"}
            />
           
            <IconText logo={"icomoon-free:books"}
            text = {"Library"}
            active = {currentActiveScreen === "library"}
            targetLink={"/library"}/>

            <IconText logo={"material-symbols:library-music-sharp"}
            text = {"My Songs"} targetLink={"/mymusic"}
            active = {currentActiveScreen === "myMusic"}/>
           </div>
           
           <div className='pt-3'>
           <IconText logo={"material-symbols:add-box"}
            text = {"Create Playlist"}
            active = {currentActiveScreen === " Create Playlist"}
            onClick={() => { setCreatePlayListModalOpen(true)}}/>
            <IconText logo={"mdi:cards-heart"}
            text = {"Liked Songs"}
            active = {currentActiveScreen === "Liked Songs"}/>
           </div>
           </div>
           <div className='px-5'>
           <div className='border border-gray-100 text-white w-2/5 flex justify-center items-center rounded-full px-2 py-1'>
            <Icon icon="carbon:earth-europe-africa" fontSize={17}/>
            <div className='ml-1 text-sm font-semibold'>
             English
             </div>
           </div>
           </div> 
        </div>
        
         <div className='h-full w-4/5 bg-app-black overflow-auto'>
            <div className='h-1/10 bg-black w-full bg-opacity-30 flex items-center justify-end'>
                <div className='w-2/3 flex h-full'>
                <div className='w-3/5 flex justify-around items-center'>
                <TextwithHover text={"Premium"}/>
                <TextwithHover text={"Support"}/>
                <TextwithHover text={"Download"}/>
                <div className='h-1/3 border-r border-white'></div>
                </div>
                <div className='w-2/5 flex items-center justify-around'>
                <TextwithHover text={"Upload song"}/>
                <div className=' bg-white w-10 h-10  flex items-center justify-center font-semibold rounded-full cursor-pointer'>KS</div>
                </div>
                </div>
            </div>
            <div className='content pt-0 p-5'>
               {children}
            </div>
         </div>
         </div>
         {currentSong && ( 
         <div className='h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center px-4' >
            <div className='w-1/4 flex items-center'>
         <img src={currentSong.thumbnail}
          className='h-12 w-12 rounded'></img>
          <div className='pl-4'>
            <div className='text-sm hover:underline cursor-pointer '> {currentSong.name}</div>
            <div className='text-xs hover:underline cursor-pointer text-gray-500'>{currentSong.artist.firstName+""+currentSong.artist.lastName}</div>
            </div>
          </div>
          <div className='w-2/4 flex justify-center h-full flex-col items-center'>
            <div className='flex w-1/3 justify-between items-center'>
                
                <Icon icon="ph:shuffle-fill" fontSize={25} className='cursor-pointer text-gray-500 hover:text-white'/>    
                <Icon icon="mdi:skip-previous-outline" fontSize={35} className='cursor-pointer  text-gray-500 hover:text-white'/>
                <Icon icon={ isPaused ?"ic:baseline-play-circle":"ic:baseline-pause-circle"} fontSize={50}className='cursor-pointer  text-gray-500 hover:text-white' onClick={togglePlayPause}/>
                <Icon icon="mdi:skip-next-outline" fontSize={35} className='cursor-pointer  text-gray-500 hover:text-white'/>
                <Icon icon="ic:twotone-repeat" fontSize={25}className='cursor-pointer  text-gray-500 hover:text-white'/>
                
            </div>
            <div></div>
          </div>
          <div className='w-1/4 flex justify-end pr-4 space-x-4 items-center'> 
           <Icon icon="ic:round-playlist-add" fontSize={25} className='cursor-pointer text-gray-500 hover:text-white' onClick={() => {
            setaddToPlayListModalOpen(true)
           }}/>
           <Icon icon="ph:heart-bold" fontSize={25} className='cursor-pointer text-gray-500 hover:text-white'/>
           </div>
         </div>
         )}
        </div>
    )
}
export default LoggedInContainer