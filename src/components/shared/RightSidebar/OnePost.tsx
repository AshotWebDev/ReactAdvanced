import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface IOnePostProps {
    pic: string
    info: string
}
const OnePost = ({pic, info}: IOnePostProps) => {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <img src={pic} alt="post" className=" w-12 h-12 rounded-md hover:w-[49px] hover:h-[49px]  transition-all duration-500" />
            <p className="paragraph-regular-medium hover:text-red-500 ">{info}</p>
            <Link to="/unique-post">
                <ArrowRight className=" w-5 h-5"/>
            </Link>
        </div>
    )
}


export default OnePost