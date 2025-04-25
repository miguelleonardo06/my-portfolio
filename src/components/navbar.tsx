import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "@tanstack/react-router";
import { menuList } from "@/mock/navigation";

export function TopNavbar() {
  return (
    <main>
      <nav className="flex items-center justify-between py-4 px-40">
        <div className="flex items-center gap-2 ">
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
