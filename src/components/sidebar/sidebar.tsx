'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  Plus,
  User,
  Users,
} from 'lucide-react';
import { SidebarItems } from '@/types/sidebarItems';
import { useMediaQuery } from 'usehooks-ts';

import { SidebarDesktop, SidebarButton, SidebarMobile } from './components';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Minhas Reservas', href: '/bookings', icon: Bell },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      {/* <SidebarButton icon={MoreHorizontal} className='w-full'>
        More
      </SidebarButton> */}
      <SidebarButton
        className='w-full mt-4 justify-center text-white'
        variant='default'
      >
        + Fazer Reserva
      </SidebarButton>
    </div>
  ),
};

export default function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}