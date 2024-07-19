import { useState } from 'react'
import TextInput from '../components/shared/TextInput'
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper'
const CreatePlaylistModal = ({closeModal}) => {
    const [playlistThumbnail,setPlaylistThumbnail] = useState("")
    const [playlistName, setPlaylistName] = useState("")
    const createPlaylist = () => {
        const response = makeAuthenticatedPOSTRequest("/playlist/create" , {name:playlistName , thumbnail:playlistThumbnail , songs:[]})
        if(response._id){
            closeModal()
        }
    }
    return(
    <div className="absolute bg-black bg-opacity-80  w-screen h-screen flex items-center justify-center" onClick={closeModal}>
    <div className="bg-app-black w-1/3 rounded p-5 " onClick={(e) => {e.stopPropagation()}}>
     <div className='text-white text-lg mb-5 font-semibold'>Create Playlist</div>
     <div className='space-y-4 flex  flex-col items-center justify-center'>
    <TextInput label={"Name"}
    labelclassname={"text-white"}
    Placeholder={"Enter Playlist Name"}
     value={playlistName}
     setvalue={setPlaylistName}/>
        <TextInput label={"Thumbnail"}
    labelclassname={"text-white"}
    Placeholder={"Thumbnail"}
     value={playlistThumbnail}
     setvalue={setPlaylistThumbnail}
     />
    <div className='bg-white w-1/3 rounded-md flex font-semibold justify-center items-center py-2 ' onClick={createPlaylist}> Create</div></div>
    
    </div>
    
    </div>
    )
}
export default CreatePlaylistModal