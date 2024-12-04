"use client";

import { useRouter } from "next/navigation";

// TODO: Fix this bullshit 3
export default function Page() {
  const router = useRouter()

  router.push('/login')
  return null
}
