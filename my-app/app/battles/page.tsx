import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/home/AppHeader";
import { AppSidebar } from "@/components/home/AppSidebar";
import { BattlesContent } from "@/components/battles/BattlesContent";

export default function BattlesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <BattlesContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
