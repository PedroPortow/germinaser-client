"use client";
import { SidebarProvider, SidebarTrigger } from "@ui/sidebar"
import AppSidebar from '@/components/AppSidebar/AppSidebar'
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Header";

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      <AppSidebar />
      <main
        className="overflow-hidden w-full"
      >
        {isMobile && (
          <Header>
            <SidebarTrigger />
          </Header>
        )}
          <div className={`"h-full min-w-[75vw] min-h-[100vh] p-4 flex items-start justify-center bg-gray-50 px-4"`}>
            {children}
          </div>
      </main>
    </SidebarProvider>
  );
}
