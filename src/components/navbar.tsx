import { ModeToggle } from "@/components/mode-toggle";
export function TopNavbar() {
  const menuList = [
    {
      label: "Home",
      icon: "Home",
    },
    {
      label: "Personal",
      icon: "Personal",
    },
    {
      label: "Tech Stack",
      icon: "Tech",
    },
    {
      label: "About",
      icon: "About",
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
            <li key={menu.label}>
              <a href="">{menu.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
