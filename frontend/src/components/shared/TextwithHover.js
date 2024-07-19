
const TextwithHover = ({ text  , active} ) => {
    return(
        <div className="flex item-center justify-start cursor-pointer ">
            <div className={`${active?"text-white":"text-gray-400"}  hover:text-white text-lg font-semibold`}>
             {text}
            </div>
        </div>
    )
}
export default TextwithHover