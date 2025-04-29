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
import { menuList } from "@/mock/navigation";
import { Link } from "@tanstack/react-router";
import { Icons } from "./icons";
export function AppSideBar() {
  return (
    <Sidebar className="z-20">
      <div className="flex justify-between my-4 mr-2">
        <SidebarTrigger className="" />
      </div>
      <SidebarHeader className="text-2xl font-semibold">
        Mig's Dev
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {menuList.map((menu) => {
                const NavIcon = Icons[menu.icon as keyof typeof Icons];
                return (
                  <SidebarMenuItem key={menu.label}>
                    <SidebarMenuButton
                      className="*:text-lg *:font-thin hover:animate-bounce"
                      asChild
                    >
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
