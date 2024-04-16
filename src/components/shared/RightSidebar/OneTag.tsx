import { Button } from "@/components/ui/button"


const OneTag = ({tagName}: string | any) => {
    return <Button className="bg-slate-300 text-black dark:text-white dark:bg-slate-800 hover:bg-indigo-400 hover:text-white h-7 small-regular">{tagName}</Button>;
}

export default OneTag