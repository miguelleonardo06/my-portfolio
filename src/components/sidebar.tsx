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
              {menuList.map((menu) => (
                <SidebarMenuItem key={menu.label}>
                  <SidebarMenuButton asChild>
                    <a href={menu.route}>{menu.label}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
