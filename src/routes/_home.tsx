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
      <main className="w-full h-screen">
        {isDesktopLaptop && (
          <div className="fixed z-20 backdrop-blur-md w-full ">
            <TopNavbar />
          </div>
        )}
        {!isDesktopLaptop && (
          <>
            <AppSideBar /> <SidebarTrigger />
          </>
        )}
        <div className="p-4 sm:py-12 sm:px-10 md:px-20 lg:px-48">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
