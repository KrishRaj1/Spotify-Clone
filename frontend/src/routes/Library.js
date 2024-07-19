
import { useState , useEffect } from "react"
import LoggedInContainer from "../container/LoggedInContainer"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper"
import { Navigate } from "react-router-dom"

const Library = () => {
    const [myPlaylists , setMyPlayLists] = useState([])
   useEffect( () => {
    const getData = async () => {
        const response = await makeAuthenticatedGETRequest("/playlist/get/me")
         setMyPlayLists(response.data)
    }
    getData()
   },[])
    return(
        <LoggedInContainer currentActiveScreen={"library"}>
            <div className="text-white text-xl font-bold pt-8 "> My Playlists</div>
            <div className="py-5 grid gap-5 grid-cols-5 cursor-pointer">
                { myPlaylists.map((item) => {
                   return <Card key={JSON.stringify(item)} title = {item.name} description="" imgUrl={item.thumbnail} playlistId={item._id} />
                })}
            </div>
        </LoggedInContainer>
    )
}
const Card = ({title , description,imgUrl , playlistId}) => {
    return(
     <div className="w-full bg-black bg-opacity-60 rounded-lg p-4 overflow-auto " onClick={() => {Navigate("/playlist/"+playlistId)}}>
         <div className="pb-4 pt-2">
             <img  src={imgUrl} className="w-full rounded-md"  alt="label" />
             
         </div>
         <div className=" text-white p-3 font font-semibold">
          {title}
         </div>
         <div className=" text-gray-500 px-2 text-sm">
          {description}
         </div>
     </div>
    )
 }
 
export default Library