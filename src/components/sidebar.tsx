import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { menuList } from "@/mock/navigation";
import { Link } from "@tanstack/react-router";
import { Icons } from "./icons";
export function AppSideBar() {
  return (
    <Sidebar>
      <div className="flex justify-between my-4 mr-2">
        <SidebarTrigger />
        <ModeToggle />
      </div>
      <SidebarHeader>Mig's Dev</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuList.map((menu) => {
                const NavIcon = Icons[menu.icon as keyof typeof Icons];
                return (
                  <SidebarMenuItem key={menu.label}>
                    <SidebarMenuButton className="hover:animate-bounce" asChild>
                      <Link to={menu.route} key={menu.label}>
                        <a href="" className="flex items-center gap-1">
                          <NavIcon height="16px" width="16px" />
                          {menu.label}
                        </a>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
