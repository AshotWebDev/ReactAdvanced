import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
  import { LucideLogIn, LucideSquareUser, LucideUser } from "lucide-react";
  import { Link } from "react-router-dom";
  
  const UserMenu = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="p-1">
          <LucideUser className="h-6 w-6 text-red-500" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 mt-4 bg-zinc-50 dark:bg-slate-800">
          <DropdownMenuItem>
            <Link
              to="/sign-in"
              className="flex text-sm gap-3 p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500"
            >
              <LucideLogIn className="h-6 w-6 text-red-500" /> Sign In
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="/sign-up"
              className="flex text-sm gap-3 p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500"
            >
              <LucideSquareUser className="h-6 w-6 text-red-500" /> Sign Up
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default UserMenu;