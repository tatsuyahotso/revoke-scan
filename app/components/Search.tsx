import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchComponentProps {
  placeholder: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchComponent({
  placeholder = "Search...",
  onKeyDown,
}: SearchComponentProps) {
  return (
    <div className="relative w-full md:w-[350px] lg:w-[500px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 " />
      <Input
        type="text"
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        className="pl-10 pr-4 py-2 border text-sm  bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-2 hidden   top-1/2 -translate-y-1/2 h-6 w-6 text-white md:flex items-center justify-center rounded-sm  bg-[#13131340] ">
        /
      </div>
    </div>
  );
}
