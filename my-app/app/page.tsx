import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/home/AppHeader";
import { AppSidebar } from "@/components/home/AppSidebar";
import { HomeContent } from "@/components/home/HomeContent";

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <HomeContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
