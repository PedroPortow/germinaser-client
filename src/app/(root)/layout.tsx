"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { SidebarProvider, SidebarTrigger } from "@ui/sidebar"
import { Sidebar } from "@/components";
 
const SIDEBAR_ITEMS = [
  {
    title: "Minhas Reservas",
    url: "#",
    icon: Inbox,
  },
]


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar 
        items={SIDEBAR_ITEMS}
      />
      <SidebarTrigger />
      <main
        className="overflow-hidden w-full"
      >
        {children}
      </main>
    </SidebarProvider>
  );
}


// return (
//   <div className="flex h-screen overflow-hidden">
//     <Sidebar

//     />
//     <div className="flex-1 flex flex-col w-full">
//       {children}
//     </div>
//   </div>

// );