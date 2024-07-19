import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import TextwithHover from '../components/shared/TextwithHover'
import PlaylistView from '../components/shared/PlaylistView'
import TextInput from '../components/shared/TextInput'
import CloudinaryUpload from '../components/shared/CloudinaryUploads'
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [name , setName ] = useState("")
    const [thumbnail,setThumbnail] = useState("")
    const [playlistUrl,setPlaylistUrl] = useState("")
    const [uploadedSongFileName , setUploadedFileName] = useState("")
    const navigate = useNavigate()
    console.log(window);
    console.log(window.cloudinary);
    const submitSong = async () => {
        const data = {name, thumbnail, track: playlistUrl};
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        );
        console.log(response)
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/home");
    };
    return(
        <div className='w-full h-full flex'>
        <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10 '>
            <div>
            <div className='logo p-5' >
           <img src={spotify_logo} alt='Spotify Logo' width={125}></img> 
           </div>
           <div className='py-5'>
            <IconText logo={"material-symbols:home"}
            text = {"Home"} active/>

            <IconText logo={"material-symbols:search-rounded"}
            text = {"Search"}/>
           
            <IconText logo={"icomoon-free:books"}
            text = {"Library"}/>

            <IconText logo={"material-symbols:library-music-sharp"}
            text = {"My Songs"}/>
           </div>
           
           <div className='pt-3'>
           <IconText logo={"material-symbols:add-box"}
            text = {"Create Playlist"}/>
            <IconText logo={"mdi:cards-heart"}
            text = {"Liked Songs"}/>
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
            <div className='font-semibold text-white text-2xl m-5'>
                Upload your music
            </div>
           <div className=' w-2/3 flex space-x-5 '>
            <div className='w-1/2 m-5'><TextInput label={"Song name"} labelclassname={"text-white"} Placeholder={"Name"} value={name} setvalue={setName}/></div>
            <div className='w-1/2 m-5'><TextInput label={"Thumbnail"} labelclassname={'text-white'} Placeholder={"Thumbnail"} value={thumbnail} setvalue={setThumbnail}/></div>
            </div>
            <div>
            {  uploadedSongFileName?(<div className='bg-white rounded-full p-2 w-1/3  m-4'>
                {uploadedSongFileName.substring(0,25)}...</div>):
           (<div className=''><CloudinaryUpload setUrl = {setPlaylistUrl} setName = {setUploadedFileName}/></div>)
            }
            </div>
            <div className='bg-white w-1/12 flex items-center justify-center rounded-full font-semibold p-3 m-6 cursor-pointer' onClick={submitSong}>Submit</div>
            
         </div>
        </div>
    )
}
export default Home