import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

const GlobalSearch = () => {
  return (
    <div className="w-full">
      <div className="relative flex min-h-[46px] items-center gap-1 rounded-xl bg-slate-200 dark:bg-slate-800 px-4">
        <LucideSearch className="h-6 w-6 cursor-pointer text-slate-400" />
        <Input
          type="text"
          placeholder="Search Globally"
          className="no-focus paragraph-regular  placeholder:text-gray-400 outline-none bg-slate-200 dark:bg-slate-800"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;