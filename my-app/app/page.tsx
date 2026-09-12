import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/home/AppHeader";
import { AppSidebar } from "@/components/home/AppSidebar";
import { HomeContent } from "@/components/home/HomeContent";
import styles from "./sidebar-overlay.module.css";

export default function Home() {
  return (
    <SidebarProvider className={styles.sidebarOverlay}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <HomeContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
