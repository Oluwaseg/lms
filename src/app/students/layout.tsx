"use client";
import { useCheckSession } from "@/hooks/useCheckSession";
import { AppSidebar } from "@/components/students/sidebar-layout/app-sidebar";
import { SiteHeader } from "@/components/students/sidebar-layout/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserProvider } from "@/contexts/student/UserContext";
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useCheckSession();
  return (
    <UserProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />

        <SidebarInset>
          <SiteHeader />

          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {/* This is where all your student pages will render */}
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  );
}
