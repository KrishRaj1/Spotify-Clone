import {Icon} from "@iconify/react"
import { Link } from "react-router-dom"
const IconText = ({logo , text  , active , targetLink , onClick}) => {
    return(
        <Link to={targetLink} className="block">
        <div className="flex item-center justify-start cursor-pointer" onClick={onClick}>
            <div className="px-5 py-2">
              <Icon  icon ={logo} color={active?"white" : "gray"} fontSize={23}/>
            </div>
            <div className={`${active?"text-white":"text-gray-400"} py-3 hover:text-white text-sm font-semibold`}>
             {text}
            </div>
        </div>
        </Link>
    )
}
export default IconText