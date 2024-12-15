"use client"

import ToggleTheme from "@/components/toggle-theme";
import NavItem from "../nav-item";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "w-full h-14 fixed top-0 left-0 transition-all z-[100] bg-transparent flex justify-between items-center font-semibold px-16",
        {
          "bg-background": scrolled
        }
      )}
    >
      <p className="text-lg font-bold">Weslley.</p>
      <nav className="flex items-center gap-8">
        <ul className="flex gap-8">
          <NavItem>Home</NavItem>
          <NavItem>Sobre</NavItem>
          <NavItem>Serviços</NavItem>
          <NavItem>Projetos</NavItem>
          <NavItem path="/blog">Blog</NavItem>
        </ul>
        <ToggleTheme />
      </nav>
    </header>
  )
}
