import HeaderIconsComponent from "./components/HeaderIconsComponent/HeaderIconsComponent"
import HeaderLogo from "./components/HeaderLogo/HeaderLogo"
import HeaderSearch from "./components/HeaderSearch/HeaderSearch"


const Header: React.FC = () => {
    return(
        <div className="header flex justify-between px-16 items-center h-24 dark:bg-slate-600">
            <HeaderLogo/>
            <HeaderSearch/>
            <HeaderIconsComponent/>
        </div>
    )
}

export default Header