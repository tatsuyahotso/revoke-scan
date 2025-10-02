import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ButtonIcon() {
  return (
    <div className="hidden lg:flex lg:gap-2">
      <Button variant="outline" size="icon" className="cursor-pointer">
        <Sun className="text-blue-600" />
      </Button>
      <Button variant="outline" size="icon" className="cursor-pointer">
        <Image src="/chain-dark.svg" width={20} height={20} alt="Chain Icon" />
      </Button>
    </div>
  );
}
