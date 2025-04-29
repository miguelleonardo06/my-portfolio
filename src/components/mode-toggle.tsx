import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeType = "dark" | "light";

export function ModeToggle() {
  const appTheme = (localStorage.getItem("app-theme") as ThemeType) || "light";
  const [theme, setTheme] = useState<ThemeType>(appTheme);

  useEffect(() => {
    const storeTheme = () => {
      localStorage.setItem("app-theme", theme);

      const getAppTheme = localStorage.getItem("app-theme");
      console.log(getAppTheme);
      if (getAppTheme == "light") {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      }
    };
    storeTheme();
  }, [theme]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full w-fit z-50">
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
