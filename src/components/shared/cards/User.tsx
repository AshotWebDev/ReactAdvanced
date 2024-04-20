import { Eye, Heart, MessageCircle } from "lucide-react";
import RenderTag from "./RenderTag";

interface IUserProps {
    id: string,
    img: string | any,
    fullName: string,
    email: string
}

const User = (user: IUserProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-[30px] bg-white border w-[250px] rounded-xl dark:bg-slate-900 gap-3 hover:shadow-md cursor-pointer">
            <img className="w-[100px] h-[100px] rounded-full" src={user.img} alt="img" />

            <div className="flex flex-col gap-2 items-center">
                <h3 className="h3-semibold">{user.fullName}</h3>
                <span className="small-regular text-zinc-500 ">{user.email}</span>
            </div>

            <span className="small-semibold">No Tags Yet</span>
        </div>
    )
}


export default User