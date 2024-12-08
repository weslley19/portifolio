import CardMacOS from "@/components/card-macos";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, FileBadgeIcon } from "lucide-react";
import Blur from "../blur";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="w-full h-[calc(100vh-160px)] mt-20">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-[2.5rem] font-bold">Olá mundo, eu sou o&nbsp;
            <span className="text-blue-500">{'{Weslley}'}</span>.
            Um desenvolvedor <br /> Front-end | Back-end
          </h1>
          <Blur direction="left" />
        </div>
        <div className="relative w-1/2">
          <Blur direction="right" />
          <CardMacOS>Colocar algum texto aqui...</CardMacOS>
        </div>
      </div>
      <div className="flex gap-6 mt-8">
        <Link href="https://linkedin.com/in/weslley-oliveira19" target="_blank">
          <Button><LinkedinIcon /> Linkedin</Button>
        </Link>
        <Link href="https://linkedin.com/in/weslley-oliveira19" target="_blank">
          <Button
            variant="outline"
            className="bg-transparent border-black dark:border-gray-500"
          >
            <FileBadgeIcon /> Currículo
          </Button>
        </Link>
      </div>
    </div>
  )
}
