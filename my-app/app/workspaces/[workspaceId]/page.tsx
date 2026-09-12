import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/home/AppHeader";
import { AppSidebar } from "@/components/home/AppSidebar";
import { WorkspaceContent } from "@/components/workspaces/WorkspaceContent";

const mockWorkspaceIds = [
  "saas-landing-page",
  "api-architecture",
  "e-commerce-dashboard",
  "mobile-app-ui",
];

export function generateStaticParams() {
  return mockWorkspaceIds.map((workspaceId) => ({ workspaceId }));
}

export default function WorkspacePage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
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
