import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText'
import { Icon } from '@iconify/react'
import TextwithHover from '../components/shared/TextwithHover'
import PlaylistView from '../components/shared/PlaylistView'
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

const Home = () => {
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
                <div className='w-1/2 flex h-full'>
                <div className='w-3/5 flex justify-around items-center'>
                <TextwithHover text={"Premium"}/>
                <TextwithHover text={"Support"}/>
                <TextwithHover text={"Download"}/>
                <div className='h-1/3 border-r border-white'></div>
                </div>
                <div className='w-2/5 flex items-center justify-around'>
                <TextwithHover text={"Sign up"}/>
                <div className='h-2/3 bg-white px-8 flex items-center justify-center font-semibold rounded-full cursor-pointer'>Log in</div>
                </div>
                </div>
            </div>
            <div className='content pt-0 p-5'>
               <PlaylistView title={"Focus"} cardData={cardData}/>
               <PlaylistView title={"Spotify Playlists"} cardData={cardData}/>
               <PlaylistView title={"Song of India"} cardData={cardData}/>
            </div>
         </div>
        </div>
    )
}
export default Home