import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import "./output.css";
import LoginComponent from './routes/Login';
import SignUpComponent from './routes/SignUp';
import HomeCompnent from './routes/Home'
import UploadSong from './routes/UploadSong'
import { useCookies } from 'react-cookie';
import LoggedInHomeHomeCompnent from './routes/LoggedInHome'
import MyMusc from './routes/MyMusic'
import songContext from './Contexts/songConetext';
import Search from './routes/Search'
import { useState } from 'react';
import SinglePlaylistView from './routes/SinglePlaylistView'
import Library from './routes/Library';

function App() {
  const [cookie, setCookie] = useCookies("token")
  const [currentSong , setCurrentSong] = useState(null)
  const [soundPlayed,setSoundPlayed] = useState(null)
    const [isPaused , setIsPaused] = useState(true)
  console.log(cookie.token);
  return (
    <div className="App w-screen h-screen font-poppins">
      <BrowserRouter>
      {cookie.token?(
      <songContext.Provider value={{currentSong,setCurrentSong , soundPlayed, setSoundPlayed , isPaused , setIsPaused}}>
      <Routes>
      <Route path='/' element={<HelloComponent/>}/>
      <Route path ='/home' element = {<LoggedInHomeHomeCompnent/>}/>
      <Route path ='/uploadsong' element={<UploadSong/>}/>
      <Route path ='/mymusic' element={<MyMusc/>}/>
      <Route path ='/search' element={<Search/>}/>
      <Route path='/library' element={<Library/>}/>
      <Route path='/playlist/:playlistId' element={<SinglePlaylistView/>} />
      <Route path='*' element = {<Navigate to="/home"/>}/>
    </Routes>
    </songContext.Provider >
      ):(
        <Routes>
        <Route path='/' element={<HelloComponent/>}/>
        <Route path = '/login' element={<LoginComponent/>}/>
        <Route path ='/signup' element = {<SignUpComponent/>}/>
        <Route path ='/home' element = {<HomeCompnent/>}/>
        <Route path='*' element = {<Navigate to="/login"/>}/>
        
      </Routes>
      )}
      
      </BrowserRouter>
    </div>
  );
}
const HelloComponent = () => {
return<div>This is from component</div>
}
export default App;
