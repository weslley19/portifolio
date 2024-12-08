"use client"

import ToggleTheme from "@/components/toggle-theme";
import ItemMenu from "./item-menu";
import { useRouter } from "next/navigation";

export default function SiteMenu() {
  const router = useRouter()

  return (
    <>
      <nav>
        <ul className="flex gap-6 font-semibold">
          <ItemMenu>Sobre</ItemMenu>
          <ItemMenu>Habilidades</ItemMenu>
          <ItemMenu>Experiências</ItemMenu>
          <ItemMenu onClick={() => router.push('/blog')}>Blog</ItemMenu>
        </ul>
      </nav>
      {"|"}
      <ToggleTheme />
    </>
  )
}
