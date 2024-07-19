const Card = ({title , description,imgUrl}) => {
   return(
    <div className="w-1/5 bg-black bg-opacity-60 rounded-lg p-4 overflow-auto">
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
export default Card