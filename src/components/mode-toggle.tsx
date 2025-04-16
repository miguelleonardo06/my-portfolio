import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";
import { useState, useEffect } from "react";

type ThemeType = "dark" | "light" | undefined;

export function ModeToggle() {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem("theme") as ThemeType) || undefined
  );

  useEffect(() => {
    if (theme) {
      if (theme == "dark") {
        document.body.classList.add(theme);
        document.body.classList.remove("light");
      } else {
        document.body.classList.add(theme);
        document.body.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full">
          <Moon height="17px" width="17px" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-fit">
        <Button type="button" onClick={() => setTheme("dark")}>
          Dark
        </Button>
        <Button type="button" variant="ghost" onClick={() => setTheme("light")}>
          Light
        </Button>
      </PopoverContent>
    </Popover>
  );
}
