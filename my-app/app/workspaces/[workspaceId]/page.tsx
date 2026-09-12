import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/home/AppHeader";
import { AppSidebar } from "@/components/home/AppSidebar";
import { WorkspaceContent } from "@/components/workspaces/WorkspaceContent";

const mockWorkspaceIds = ["1", "2", "3", "4"];

export function generateStaticParams() {
  return mockWorkspaceIds.map((workspaceId) => ({ workspaceId }));
}

export default async function WorkspacePage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = await params;

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <WorkspaceContent workspaceId={workspaceId} />
      </SidebarInset>
    </SidebarProvider>
  );
}
