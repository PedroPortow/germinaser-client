"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components";
// import { FiHome, FiUser, FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Sidebar

    />
  );
}
