import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "@tanstack/react-router";
import { menuList } from "@/mock/navigation";
import { Icons } from "./icons";
export function TopNavbar() {
  return (
    <main>
      <nav className="flex items-center justify-between py-4 px-40">
        <div className="flex items-center gap-2 ">
          <ModeToggle />
          <Link to={"/"}>
            <a className="text-xl fancy-font font-semibold tracking-wide">
              Mig's Development
            </a>
          </Link>
        </div>
        <ul className="*:text-sm flex gap-10">
          {menuList.map((menu) => {
            const NavIcon = Icons[menu.icon as keyof typeof Icons];
            return (
              <Link to={menu.route} key={menu.label}>
                <a
                  href=""
                  className="flex items-center gap-1 hover:animate-bounce"
                >
                  <NavIcon height="16px" width="16px" />
                  {menu.label}
                </a>
              </Link>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
