import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "@tanstack/react-router";
import { MenuListType } from "@/types";
export function TopNavbar() {
  const menuList: MenuListType[] = [
    {
      label: "Home",
      icon: "Home",
      route: "/#",
    },
    {
      label: "Personal",
      icon: "Personal",
      route: "/personal",
    },
    {
      label: "Tech Stack",
      icon: "Tech",
      route: "/#",
    },
    {
      label: "About",
      icon: "About",
      route: "/#",
    },
  ];
  return (
    <main>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ModeToggle />
          <a className="text-xl fancy-font font-semibold tracking-wide">
            Mig's Development
          </a>
        </div>
        <ul className="*:text-sm flex gap-10">
          {menuList.map((menu) => (
            <Link to={menu.route} key={menu.label}>
              <a href="">{menu.label}</a>
            </Link>
          ))}
        </ul>
      </nav>
    </main>
  );
}
