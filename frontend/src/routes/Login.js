
import { Icon } from "@iconify/react"
import { useState } from "react"
import TextInput from "../components/shared/TextInput"
import PasswordInput from "../components/shared/PasswordInput"
import { useCookies } from "react-cookie"
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper"
import { Link , useNavigate} from "react-router-dom"
const LoginComponent = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cookie,setCookie] = useCookies(["token"])
    const navigate =useNavigate()
    const login = async () => {
       
        const data = {email,password}
        const response = await makeUnauthenticatedPOSTRequest("/auth/login" ,data)
        if(response && !response.err){
         console.log(response)
         const token = response.token;
             const date = new Date();
             date.setDate(date.getDate() + 30);
             setCookie("token", token, {path: "/", expires: date});
             alert("Success");
             navigate("/home")
        }
        
     }
    return (
       <div className=" w-full h-full flex flex-col items-center ">
        <div className="logo p-4 border-b border-solid border-gray-300 w-full flex justify-center ">
        <Icon icon = "logos:spotify" width="130" />
        </div>
        <div className="inputField w-1/3 py-10 flex flex-col items-center justify-center">
            <div className=" font-bold mb-12">To continue , log in to Spotify</div>
        <TextInput 
        Placeholder={"EmailID or Username"} 
        label={"Email or Username"} 
        classname={"my-4"}
        value={email}
        setvalue={setEmail}/>

        <PasswordInput Placeholder={"Password"} 
        label={"Password"} value={password}
        setvalue={setPassword} />

        <div className=" flex items-center justify-end my-5 w-full">
            <button className =" p-2 bg-green-500 px-8 rounded-full font-semibold" 
            onClick={(e) => {
                e.preventDefault()
                login()
            }}>
                LOG IN</button>
        </div>
        <div className=" w-full border-b border-solid border-gray-300 m-4"> </div>
        <div className="font-semibold my-4"> Don't have an account?</div>
        <div className="border borer-solid border-gray-400 w-full flex justify-center rounded-full 
        m-2 text-gray-400 font-semibold p-1"> <Link to='/signup'>SIGN UP FOR SPOTIFY </Link></div>
        </div>
        </div>
    )
}
export default LoginComponent