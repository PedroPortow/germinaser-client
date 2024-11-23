"use client";

import SidebarButton from './SidebarButton';
import { SidebarButtonProps } from './SidebarButton';
import { SheetClose } from '@ui/sheet';

export default function SidebarButtonSheet(props: SidebarButtonProps) {
  return (
    <SheetClose asChild>
      <SidebarButton {...props} />
    </SheetClose>
  );
}
