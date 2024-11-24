import {
  Sidebar ,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@ui/sidebar"
import Image from "next/image"
import logoImg from '@/../public/germina.png'
import { SidebarItem } from "@/types/sidebar"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface SidebarProps {
  items: SidebarItem[];
}

export default function AppSidebar({ items }: SidebarProps) {
  const router = useRouter();


  return (
    <Sidebar>
      <SidebarHeader>
        <Image
          src={logoImg}
          alt= "GerminaSer logo"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Button
                      onClick={() => router.push('/bookings/new')}
                    >+ Fazer Reserva</Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
