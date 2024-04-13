import { Button } from "@/components/ui/button";
import { BookPlus, FileQuestion, Home, Tags, UsersRound } from "lucide-react";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

interface ISidebBarItem {
    id: string;
    text: string
    icon: ReactNode
}

const LeftSidebar = () => {
    const [activeItem, setAcvtiveItem] = useState('1')
    const [menuData, setMenuData] = useState<ISidebBarItem[]>([
        {
            id: '1',
            text: 'Home',
            icon: <Home />
        },

        {
            id: '2',
            text: 'Posts',
            icon: <BookPlus />
        },

        {
            id: '3',
            text: 'Questions',
            icon: <FileQuestion />
        },

        {
            id: '4',
            text: 'Community',
            icon : <UsersRound/>
        },

        {
            id: '5',
            text: 'Tags',
            icon : <Tags />
        },

    ])


    const handleClick = (id: string): void => {
        setAcvtiveItem(id);
    }


    return (
        <div className=" flex flex-col  gap-6">
            <div className="flex  flex-col gap-6 items-center w-[280px] pt-32 pb-14 border-r">
                {
                    menuData.map(el =>

                        <Link to="/" key={el.id}>
                            <Button
                                variant="outline"
                                size="lg"
                                className={`${activeItem === el.id ? 'bg-red-500 text-slate-100 hover:bg-red-500 hover:text-slate-100 hover:rounded' : 'bg-slate-0 text-black'} flex justify-start items-center gap-3  w-56`}
                                onClick={() => handleClick(el.id)}
                            >   
                                <span>{el.icon}</span>
                                <span>{el.text}</span>
                            </Button>
                        </Link>
                    )
                }
            </div>

            <div className="flex flex-col items-center gap-3">
                <Button variant="destructive" className="w-64 ">Log In</Button>
                <Button className="w-64  bg-blue-500 hover:bg-blue-400" >Sign Up</Button>
            </div>
        </div>
    );
};

export default LeftSidebar;