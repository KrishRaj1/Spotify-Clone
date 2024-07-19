import { Icon } from "@iconify/react"
import TextInput from "../components/shared/TextInput"
import PasswordInput from "../components/shared/PasswordInput"
import { Link } from "react-router-dom"
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"
import { useState } from "react"
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper"
const SignUpComponent = () => {
    const [email,setEmail] = useState("")
    const [confirmEmail,setconfirmEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setFirstname] = useState("")
    const [lastName,setLastname] = useState("")
    const [cookie, setCookie] = useCookies(["token"])
    const navigate = useNavigate()

    const signUp = async () => {
       if(email !== confirmEmail){
        alert("Email and cofirm email fields should be match")
        return
       }
       const data = {email,username,password,firstName,lastName}
       const response = await makeUnauthenticatedPOSTRequest("/auth/register" ,data)
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
            <div className=" font-bold text-2xl mb-12">Sign up for free to start listening.</div>
        <TextInput Placeholder={"Enter your email"} label={"What's your email"} classname={"my-4"} value={email} setvalue={setEmail}/>
        <TextInput Placeholder={"Enter your email again"} label={"Confirm email address"} classname={"mb-4"} value={confirmEmail} setvalue={setconfirmEmail}/>
        <TextInput Placeholder={"Enter your username"} label={"Username"} classname={"mb-4"} value={username} setvalue={setUsername} />
        <PasswordInput Placeholder={"Create a password"} label={"Create a password"} value={password} setvalue={setPassword}/>
        <div className="w-full flex justify-between items-center space-x-8">
        <TextInput Placeholder={"Enter your first name"} label={"First name"} classname={"my-4"} value={firstName} setvalue={setFirstname}/>
        <TextInput Placeholder={"Enter your last  name"} label={"Last name"} classname={"my-4"} value={lastName} setvalue={setLastname}/>
        </div>
        <div className=" flex items-center justify-center my-5 w-full">
            <button className =" p-2 bg-green-500 px-8 rounded-full  font-semibold"
             onClick={ (e) => {
                e.preventDefault()
                signUp()
             }}>
                SIGN UP</button>
        </div>
        <div className=" w-full border-b border-solid border-gray-300 m-4"> </div>
        <div className="font-semibold my-4"> Already have an account?</div>
        <div className="border borer-solid border-gray-400 w-full flex justify-center rounded-full 
        m-2 text-gray-400 font-semibold p-1"><Link to='/login'>LOG IN </Link>  </div>
        </div>
        </div>
    )
}
export default SignUpComponent