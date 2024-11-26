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
  SidebarTrigger,
} from "@ui/sidebar"
import Image from "next/image"
import logoImg from '@/../public/germina.png'
import { SidebarItem } from "@/types/sidebar"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks";

interface SidebarProps {
  items: SidebarItem[];
}

export default function AppSidebar({ items }: SidebarProps) {
  const router = useRouter();
  const { user } = useAuthContext()

  console.log({user})

  return (
    <Sidebar
      className="drop-shadow-lg"
    >
      <SidebarHeader>
        <Image
          src={logoImg}
          alt= "GerminaSer logo"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
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
                    >+ Fazer Reserva</Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {user?.name}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
