import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/home/AppHeader";
import { AppSidebar } from "@/components/home/AppSidebar";
import { WorkspaceContent } from "@/components/workspaces/WorkspaceContent";

export default function WorkspacePage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <WorkspaceContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
