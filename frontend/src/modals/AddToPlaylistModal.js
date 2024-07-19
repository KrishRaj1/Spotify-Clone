import { useState,useEffect } from "react"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper"
const AddToPlaylistModal = ({closeModal ,addSongToPlaylist }) => {
    const [myPlaylists , setMyPlayLists] = useState([])
   useEffect( () => {
    const getData = async () => {
        const response = await makeAuthenticatedGETRequest("/playlist/get/me")
         setMyPlayLists(response.data)
    }
    getData()
   },[])
    return (
        <div className="absolute bg-black bg-opacity-80  w-screen h-screen flex items-center justify-center" onClick={closeModal}>
    <div className="bg-app-black w-1/3 rounded p-5 " onClick={(e) => {e.stopPropagation()}}>
     <div className='text-white text-lg mb-5 font-semibold'>Select Playlist</div>
     <div className='space-y-4 flex  flex-col items-center justify-center'>
        {myPlaylists.map(item => {
            return <PlaylistListComponent info={item} addSongToPlaylist={addSongToPlaylist}/>
        })}
    </div>
   </div>
 </div>
    )
}
const PlaylistListComponent = ({info, addSongToPlaylist}) => {
    return(
        <div className="bg-app-black flex w-full items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 p-3 " onClick={addSongToPlaylist(info._id)}>
            <div>
                <img src={info.thumbnail} className="w-10 h-10 rounded " alt="thumbnail"/>
            </div>
            <div className="text-white font-semibold">
                {info.name}
            
            </div>
        </div>
    )
}
export default AddToPlaylistModal