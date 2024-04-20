import { Eye, Heart, MessageCircle } from "lucide-react";
import RenderTag from "./RenderTag";

interface INewsProps {
    id: string
    img: any,
    title: string
    tags: {
        id: string;
        title: string;
        url: string;
        totalCount?: number;
        showCount?: boolean;
        className?: string;
    }[],
    owner: string,
    created_at: string,
    votes: string | number,
    views: string | number,
    comments: string | number
}

const News = (news: INewsProps) => {
    return (
        <div className="w-[420px] bg-slate-100 px-4 py-10  rounded-xl flex flex-col justify-center gap-3 dark:bg-slate-900">
            <div className=" w-full h-[250px] rounded-xl overflow-hidden cursor-pointer">
                <img src={news.img} alt="img" className=" w-full transition-all duration-500 hover:scale-105" />
            </div>

            <div className="flex flex-col  items-start gap-3">
                <p className="h3-semibold">{news.title}...</p>

                <div className="flex gap-3">
                    {
                        news.tags.map(tag => (
                            <RenderTag id={tag.id}
                                title={tag.title}
                                url={tag.url}
                                key={tag.id}
                                showCount={true}
                                totalCount={tag.count} />
                        ))
                    }
                </div>

                <div className="flex items-center justify-between w-full">
                    <div className="flex gap-3 items-start">
                           <img className="w-[20px] h-[20px] rounded-full" src={news.img} alt="img" />
                            <div className="flex  items-center gap-2 hover:text-red-500 cursor-pointer">
                                <span className="paragraph-regular-medium ">{news.owner}</span>
                                <span className="small-regular">created {news.created_at} ago</span>
                            </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        <span className="small-regular ">{news.votes} votes</span>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5"/>
                        <span className="small-regular ">{news.comments} Comments</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        <span className="small-regular ">{news.views} Views</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default News