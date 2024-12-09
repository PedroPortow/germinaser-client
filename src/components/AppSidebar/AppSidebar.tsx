"use client"

import {
  Sidebar as UiSidebar,
  SidebarContent,
  SidebarFooter,
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
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks";
import { ChevronUp, Inbox, User, User2 } from "lucide-react"
import { Badge } from "../ui/badge"
import { AdminSidebarGroup, UserSidebarGroup } from "./components"
import { USER_ROLE } from "@/constants/user"

const USER_SIDEBAR_ITEMS = [
  {
    title: "Reservas",
    url: "/bookings",
    icon: Inbox,
  },
]

const ADMIN_SIDEBAR_ITEMS = [
  {
    title: "Usuários",
    url: "/admin/users",
    icon: User,
  },
]

export default function AppSidebar() {
  const router = useRouter();
  const { user, JWT_LOCAL_STORAGE_KEY } = useAuthContext()

  function handleLogout() {
    localStorage.removeItem(JWT_LOCAL_STORAGE_KEY)
    router.push('/login')
  }

  return (
    <UiSidebar
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
        <Badge 
          className="self-start mt-4"
          variant='outline'
        >
          Créditos: 9
        </Badge>
      </SidebarHeader>
      <SidebarContent>
        <UserSidebarGroup items={USER_SIDEBAR_ITEMS} />
        {user?.role !== USER_ROLE.USER && (
          <AdminSidebarGroup items={ADMIN_SIDEBAR_ITEMS} />
        )}
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
                  <DropdownMenuItem onClick={handleLogout}>
                    <span>Desconectar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </UiSidebar>
  )
}
