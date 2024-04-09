import { Search } from "lucide-react"


const HeaderSearch: React.FC = () => {
    return(
        <div className="header_search relative w-4/12 h-10">
            <Search className="absolute left-2 top-2 text-slate-400 " />
            <input className="w-full h-full pl-12 px-2 bg-slate-200 rounded-lg outline-none" placeholder="Search globally" type="text" value=""></input>
        </div>
    )
}

export default HeaderSearch