import { HeartIcon, LinkedinIcon, GithubIcon } from "lucide-react"
import Link from "next/link"
import Tooltip from "../tooltip"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="h-20 min-h-20 flex items-center gap-4 border-t mt-12">
      <div className="container flex justify-between items-center">
        <div className="flex gap-4">
          Feito com <HeartIcon /> {year}
        </div>
        <div className="flex items-center gap-4">
          <Tooltip label="Linkedin">
            <Link href="https://linkedin.com/in/weslley-oliveira19" target="_blank">
              <LinkedinIcon className="hover:scale-110" />
            </Link>
          </Tooltip>
          <Tooltip label="Github">
            <Link href="https://github.com/weslley19" target="_blank">
              <GithubIcon className="hover:scale-110" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </footer>
  )
}
