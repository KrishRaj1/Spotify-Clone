const TextInput = ({label,Placeholder ,classname , value ,setvalue, labelclassname}) => {
return(
    <div className={`Inputtext flex flex-col space-y-2 w-full ${classname}`}>
        <label for={label} className={`font-semibold ${labelclassname}`}>
            {label}
            </label>
        <input type="text" placeholder={Placeholder} 
        className="border border-solid border-gray-400 rounded p-1
        w-full" id={label}
        value={value}
       setvalue={setvalue}
        onChange={(e) =>{
            setvalue(e.target.value)
        }}
        />
    </div>
)
}
export default TextInput