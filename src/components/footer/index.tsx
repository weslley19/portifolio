import ButtonIcon from "../button-icon";
import { ArrowBigUp, HeartIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="h-14 flex justify-between items-center px-16">
      <div className="flex items-center gap-2 text-sm">
        Feito com <HeartIcon /> por Weslley
      </div>
      <ButtonIcon><ArrowBigUp /></ButtonIcon>
    </footer>
  )
}
