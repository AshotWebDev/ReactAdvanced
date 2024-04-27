
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Home, LucideFileQuestion, LucideNewspaper, LucideUsers2, Menu, Tags } from "lucide-react"
import { useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"


const ToggleBurgerMenu = () => {

    const {pathname} = useLocation()

    const isActive = (route: string): boolean => {
        return location.pathname === route
    }


  return (
    <div>
        <Sheet>
        <SheetTrigger><Menu  className="w-5 h-5 text-red-500"/></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>

            <div className="flex flex-1 flex-col gap-6 mt-6">
                <Link to="/" className={`flex items-center justify-start gap-4  p-4 rounded-lg ${
                    isActive("/")
                    ? "primary-gradient  base-bold text-zinc-50" :
                    "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                } `}>
                    <Home className="h-5 w-5"/>
                    <span >Home</span>
                </Link>

                <Link to="/posts" className={`flex items-center justify-start gap-4  p-4 rounded-lg ${
                    isActive("/posts")
                    ? "primary-gradient  base-bold text-zinc-50" :
                    "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                } `}>
                    <LucideNewspaper className="h-5 w-5"/>
                    <span>Posts</span>
                </Link>

                <Link to="/questions" className={`flex items-center justify-start gap-4  p-4 rounded-lg ${
                    isActive("/questions")
                    ? "primary-gradient  base-bold text-zinc-50" :
                    "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                } `}>
                    <LucideFileQuestion className="h-5 w-5"/>
                    <span>Questions</span>
                </Link>

                <Link to="/community" className={`flex items-center justify-start gap-4  p-4 rounded-lg ${
                    isActive("/community")
                    ? "primary-gradient  base-bold text-zinc-50" :
                    "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                } `}>
                    <LucideUsers2 className="h-5 w-5"/>
                    <span>Community</span>
                </Link>

                <Link to="/tags" className={`flex items-center justify-start gap-4  p-4 rounded-lg ${
                    isActive("/tags")
                    ? "primary-gradient  base-bold text-zinc-50" :
                    "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                } `}>
                    <Tags className="h-5 w-5"/>
                    <span >Tags</span>
                </Link>
            </div>
              
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default ToggleBurgerMenu