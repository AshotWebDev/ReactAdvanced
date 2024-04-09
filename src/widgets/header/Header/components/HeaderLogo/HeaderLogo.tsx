
import { Link } from "react-router-dom"
import logo from "@/images/logo.png";

const HeaderLogo: React.FC = () => {
    return(
        <div className="header_logo flex gap-2 items-center">
            <Link to={'/'}>
                <img alt="PlusDev.net" loading="lazy" width="35" height="35"  src={logo}/>
            </Link>
            <h3 className="h3-bold ml-1 hidden font-bold text-slate-900 sm:block text-xl dark:text-white">PlusDev<span className="text-red-500">.NET</span></h3>
        </div>
    )
}

export default HeaderLogo