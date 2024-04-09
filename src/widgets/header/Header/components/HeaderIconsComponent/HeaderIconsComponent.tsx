
import { FolderPlus, LogIn, ShieldQuestion, SquarePlus, SquareUser, Sun, User } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import useTheme from "@/hooks/useThem";


const HeaderIconsComponent: React.FC = () => {
    const [position, setPosition] = useState("bottom")
    const { mode, setMode } = useTheme();

    return (
        <div className="header_icons flex items-center gap-12 text-red-600">
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <SquarePlus />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem className="flex items-center gap-2"  value="top"> <FolderPlus/> Create a Post</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem className="flex items-center gap-2 " value="bottom"> <ShieldQuestion />  Asq a Question</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>


            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Sun />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-24">
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem className="flex items-center gap-2"  value="top" onClick={() => setMode( "light" )}> Light</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem className="flex items-center gap-2 " value="center" onClick={() => setMode( "dark" )}>  Dark</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem className="flex items-center gap-2 " value="bottom" onClick={() => setMode( "system" )}>  System</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>


            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <User />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-34">
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem className="flex items-center gap-2"  value="top"><LogIn /> Log In</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem className="flex items-center gap-2 " value="center"> <SquareUser />  Sign Up</DropdownMenuRadioItem>
                    
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            
        </div>
    )
}

export default HeaderIconsComponent