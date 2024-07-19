import spotify_logo from '../assets/images/spotify_logo_white.svg'
import {Howl,Howler} from 'howler'
import IconText from '../components/shared/IconText'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import TextwithHover from '../components/shared/TextwithHover'
import SingleSongCard from '../components/shared/SingleSongCard'
import { makeAuthenticatedGETRequest } from '../utils/serverHelper'
import LoggedInContainer from '../container/LoggedInContainer'


// const MyMusic = () => {
//    const [songdata,setSongdata] = useState([])
//    const [soundPlayed,setSoundPlayed] = useState(null)
//    const playSound =(songSrc) => {
//     if(soundPlayed){
//         soundPlayed.stop();
//     }
//     let sound = new Howl({
//         src: [songSrc],
//         html5: true,
//     });
//      setSoundPlayed(sound)
//      sound.play();
//    }
//     useEffect(() => {
//       const getData = async() => {
//         const response = await makeAuthenticatedGETRequest("/song/get/mysongs")
//         console.log(response);
//         setSongdata(response.data)
//       } 
//       getData()
//     },[])
    
//     return(
//         <div className='w-full h-full flex'>
//         <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10 '>
//             <div>
//             <div className='logo p-5' >
//            <img src={spotify_logo} alt='Spotify Logo' width={125}></img> 
//            </div>
//            <div className='py-5'>
//             <IconText logo={"material-symbols:home"}
//             text = {"Home"}/>

//             <IconText logo={"material-symbols:search-rounded"}
//             text = {"Search"}/>
           
//             <IconText logo={"icomoon-free:books"}
//             text = {"Library"}/>

//             <IconText logo={"material-symbols:library-music-sharp"}
//             text = {"My Songs"} active/>
//            </div>
           
//            <div className='pt-3'>
//            <IconText logo={"material-symbols:add-box"}
//             text = {"Create Playlist"}/>
//             <IconText logo={"mdi:cards-heart"}
//             text = {"Liked Songs"}/>
//            </div>
//            </div>
//            <div className='px-5'>
//            <div className='border border-gray-100 text-white w-2/5 flex justify-center items-center rounded-full px-2 py-1'>
//             <Icon icon="carbon:earth-europe-africa" fontSize={17}/>
//             <div className='ml-1 text-sm font-semibold'>
//              English
//              </div>
//            </div>
//            </div> 
//         </div>
//          <div className='h-full w-4/5 bg-app-black overflow-auto'>
//             <div className='h-1/10 bg-black w-full bg-opacity-30 flex items-center justify-end'>
//                 <div className='w-2/3 flex h-full'>
//                 <div className='w-3/5 flex justify-around items-center'>
//                 <TextwithHover text={"Premium"}/>
//                 <TextwithHover text={"Support"}/>
//                 <TextwithHover text={"Download"}/>
//                 <div className='h-1/3 border-r border-white'></div>
//                 </div>
//                 <div className='w-2/5 flex items-center justify-around'>
//                 <TextwithHover text={"Upload song"}/>
//                 <div className=' bg-white w-10 h-10  flex items-center justify-center font-semibold rounded-full cursor-pointer'>KS</div>
//                 </div>
//                 </div>
//             </div>
//             <div className='content p-8 overflow-auto'>
//             <div className='text-white text-lg pb-4 font-semibold pl-2'>My Songs</div>
//             <div className='space-y-3'>
//              {
//                 songdata.map((item) => {
//                     return <SingleSongCard info={item} playSound={playSound}/>
//                 })
//              }
//               </div>
//          </div>
//          </div>
//         </div>
//     )
// }
const MyMusic = () => {
  const [songdata,setSongdata] = useState([])
     
      useEffect(() => {
        const getData = async() => {
          const response = await makeAuthenticatedGETRequest("/song/get/mysongs")
          console.log(response);
          setSongdata(response.data)
        } 
        getData()
      },[])
      return(
        <LoggedInContainer currentActiveScreen="myMusic">
          <div className='text-white text-lg pb-4 font-semibold pl-2 pt-8'>My Songs</div>
             <div className='space-y-3'>
              {
                 songdata.map((item) => {
                     return <SingleSongCard info={item} playSound={() => {}}/>
                 })
              }
               </div>
        </LoggedInContainer>
      )

}
export default MyMusic