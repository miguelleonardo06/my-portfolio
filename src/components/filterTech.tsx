import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Icons } from "./icons";

type FilterTechStackProp = {
  setFilterTech: React.Dispatch<React.SetStateAction<string | null>>;
};
export function FilterTechStack({ setFilterTech }: FilterTechStackProp) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <Icons.filter height="18px" width="18px" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit flex flex-col space-y-2">
        <Button variant="ghost" onClick={() => setFilterTech("front-end")}>
          Front-end
        </Button>
        <Button variant="ghost" onClick={() => setFilterTech("back-end")}>
          Back-end{" "}
        </Button>
        <Button variant="destructive" onClick={() => setFilterTech(null)}>
          <Icons.delete />
          Remove Filter
        </Button>
      </PopoverContent>
    </Popover>
  );
}
