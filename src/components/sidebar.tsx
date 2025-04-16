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
import { Button } from "./ui/button";
export function AppSideBar() {
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
    <Sidebar>
      <SidebarTrigger />
      <SidebarHeader>Mig's Dev</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuList.map((menu) => (
                <SidebarMenuItem key={menu.label}>
                  <SidebarMenuButton>{menu.label}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
