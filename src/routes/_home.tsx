import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TopNavbar } from "@/components/navbar";
import { useMediaQuery } from "react-responsive";
import { AppSideBar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export const Route = createFileRoute("/_home")({
  component: HomeLayout,
});

function HomeLayout() {
  const isDesktopLaptop = useMediaQuery({ minWidth: 1024 });

  return (
    <SidebarProvider>
      <main className="w-full h-screen p-4 sm:px-48 sm:py-5 overflow-hidden">
        {isDesktopLaptop && <TopNavbar />}
        {!isDesktopLaptop && (
          <>
            <AppSideBar /> <SidebarTrigger />
          </>
        )}
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
