"use client";
import { Inbox } from "lucide-react"
import { SidebarProvider, SidebarTrigger } from "@ui/sidebar"
import { Header, Sidebar } from "@/components";
import { useIsMobile } from "@/hooks/use-mobile";

const SIDEBAR_ITEMS = [
  {
    title: "Reservas",
    url: "#",
    icon: Inbox,
  },
]


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      <Sidebar
        items={SIDEBAR_ITEMS}
      />
      <main
        className="overflow-hidden w-full"
      >
        {isMobile && (
          <Header>
            <SidebarTrigger />
          </Header>
        )}
        {children}
      </main>
    </SidebarProvider>
  );
}
