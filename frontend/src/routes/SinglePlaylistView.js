import { useEffect, useState } from "react"
import LoggedInContainer from "../container/LoggedInContainer"
import { useParams } from "react-router-dom"
import SingleSongCard from "../components/shared/SingleSongCard"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper"
const SinglePlaylistView = () => {
    const {playlistId} =useParams()
    const [playlistDetails,setPlaylistDetails] = useState({})
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/playlist/" + playlistId)
            setPlaylistDetails(response)
        }
    },[])
    return(
        <LoggedInContainer currentActiveScreen={"library"}>
            { playlistDetails._id && (
                <div>
            
         <div className="text-white text-xl font-bold pt-8 "> {playlistDetails.name}</div>
         <div className="pt-10 space-y-3">
                    
                    {playlistDetails.songs.map((item) => {
                        return (
                            <SingleSongCard info={item}
                            key={JSON.stringify(item)}
                            playSound={() => {}}
                        />
                    );
                })}
            </div>
            </div>
          )}
        </LoggedInContainer>
    )
}
export default SinglePlaylistView