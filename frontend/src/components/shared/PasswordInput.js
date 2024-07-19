const TextInput = ({label,Placeholder , value , setvalue}) => {
    return(
        <div className="Inputtext flex flex-col space-y-2 w-full ">
            <label for={label} className="font-semibold">
                {label}
                </label>
            <input type="password" placeholder={Placeholder} 
            className="border border-solid border-gray-400 rounded
             p-1 w-full" id={label}
             value={value}
             setvalue={setvalue}
             onChange={(e) => {
                setvalue(e.target.value)
             }}/>
    
        </div>
    )
    }
    export default TextInput