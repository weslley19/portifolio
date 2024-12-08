interface ItemMenuProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function ItemMenu({ children, onClick }: ItemMenuProps) {
  return (
    <li
      className="cursor-pointer transition-colors hover:text-blue-500"
      onClick={onClick}
    >
      {children}
    </li>
  )
}
