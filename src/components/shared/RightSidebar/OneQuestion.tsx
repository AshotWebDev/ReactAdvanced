import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface IOneQuestion {
    info: string
}

const OneQuestion = ({info}: IOneQuestion) => {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <p className="paragraph-regular-medium hover:text-red-500 ">{info}</p>

            <Link to="/unique-news">
                <ArrowRight className="w-5 h-5"/>
            </Link>
        </div>
    )
}

export default OneQuestion