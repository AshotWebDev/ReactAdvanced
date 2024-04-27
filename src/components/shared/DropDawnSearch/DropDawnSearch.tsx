import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import RenderTag from "../cards/RenderTag";

const searchTags = [
    {
        id: "1",
        name: "Post",
        url: "/tags/1",
    },

    {
        id: "2",
        name: "Question",
        url: "/tags/1",
    },

    {
        id: "3",
        name: "User",
        url: "/tags/1",
    },

    {
        id: "3",
        name: "Tag",
        url: "/tags/1",
    },
]


const DropDawnSearch = () => {
    return (
        <div className="no focus relative w-full max-w-[600px] max-lg:ml-4 max-md:hidden">
            <DropdownMenu >
                <DropdownMenuTrigger className="no focus w-full">
                    <GlobalSearch />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-full  bg-slate-200 dark:bg-slate-800">
                    <div className="w-full flex gap-3 items-center">
                        {
                            searchTags.map((tag) => (
                                <RenderTag key={tag.id} id={tag.id} title={tag.name} url={tag.url} />
                            ))
                        }
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default DropDawnSearch