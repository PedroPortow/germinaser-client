import {
  Sidebar ,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from "next/image"
import logoImg from '@/../public/logonolabel.png'
import { SidebarItem } from "@/types/sidebar"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks";
import { ChevronUp, Plus, User2 } from "lucide-react"

interface SidebarProps {
  items: SidebarItem[];
}

export default function AppSidebar({ items }: SidebarProps) {
  const router = useRouter();
  const { user } = useAuthContext()

  return (
    <Sidebar
      className="p-2"
    >
      <SidebarHeader className="w-full flex justify-between items-center pt-8">
        <Image
          src={logoImg}
          alt= "GerminaSer logo"
          width={180}
          height={180}
          priority
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                <Button
                 onClick={() => router.push('/bookings/new')}
                 variant='secondary'
                >
                <Plus />
                 Nova Reserva
                </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> {user?.name}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
