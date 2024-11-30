"use client";
import { Inbox } from "lucide-react"
import { SidebarProvider, SidebarTrigger } from "@ui/sidebar"
import { Header, Sidebar } from "@/components";
import { useIsMobile } from "@/hooks/use-mobile";


const SIDEBAR_ITEMS = [
  {
    title: "Reservas",
    url: "/bookings",
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
          <div className="h-full min-w-[75vw] p-4 flex items-center justify-center bg-gray-50 px-4">
            {children}
          </div>
      </main>
    </SidebarProvider>
  );
}
