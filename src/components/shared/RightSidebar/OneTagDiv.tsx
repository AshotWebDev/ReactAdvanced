import { createContext } from "react";
import OneTag from "./OneTag";

interface IOneTagDivProps {
    tagName: string,
    count: string
}

const OneTagDiv = ({tagName, count}: IOneTagDivProps) => {

    return (
        <div className="flex items-center justify-between">
               <OneTag tagName={tagName}/>
               <span className="small-regular">{count}</span>
        </div>
    )
}

export default OneTagDiv