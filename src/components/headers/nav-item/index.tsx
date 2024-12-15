import Link from "next/link"

interface NavItemProps {
  path?: string
  children: React.ReactNode
}

export default function NavItem({ path = "", children }: NavItemProps) {
  return (
    <Link href={path}>
      <li className="transition-colors ease-in-out text-sm font-semibold hover:text-foreground-blue-light">{children}</li>
    </Link>
  )
}
