"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components";
// import { FiHome, FiUser, FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar

      />
      <div className="flex-1 flex flex-col w-full">
          asd
        {children}
      </div>
    </div>
 
  );
}
