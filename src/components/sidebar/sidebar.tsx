'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from 'lucide-react';
import { SidebarItems } from '@/types/sidebarItems';
import { useMediaQuery } from 'usehooks-ts';

import { SidebarDesktop, SidebarButton, SidebarMobile } from './components';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Notifications', href: '/bookings/notifications', icon: Bell },
    { label: 'Messages', href: '/item/messages', icon: Mail },
    {
      href: '/item/lists',
      icon: List,
      label: 'Lists',
    },
    {
      href: '/item/bookmarks',
      icon: Bookmark,
      label: 'Bookmarks',
    },
    {
      href: '/item/communities',
      icon: Users,
      label: 'Communities',
    },
    {
      href: '/item/profile',
      icon: User,
      label: 'Profile',
    },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      <SidebarButton icon={MoreHorizontal} className='w-full'>
        More
      </SidebarButton>
      <SidebarButton
        className='w-full justify-center text-white'
        variant='default'
      >
        Tweet
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