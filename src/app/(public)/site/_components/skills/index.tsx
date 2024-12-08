import PageTitle from "@/components/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { FaNodeJs, FaReact, FaLaravel, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import Tooltip from "@/components/tooltip";

export default function Skills() {
  const size = {
    widht: 'w-10',
    height: 'h-10'
  }

  const skills: Array<{ name: string, icon: JSX.Element }> = [
    { name: "NodeJS", icon: <FaNodeJs className={`${size.widht} ${size.height}`} /> },
    { name: "ReactJS", icon: <FaReact className={`${size.widht} ${size.height}`} /> },
    { name: "NextJS", icon: <SiNextdotjs className={`${size.widht} ${size.height}`} /> },
    { name: "Laravel", icon: <FaLaravel className={`${size.widht} ${size.height}`} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className={`${size.widht} ${size.height}`} /> },
    { name: "Docker", icon: <FaDocker className={`${size.widht} ${size.height}`} /> },
    { name: "AWS", icon: <FaAws className={`${size.widht} ${size.height}`} /> },
    { name: "Azure", icon: <VscAzure className={`${size.widht} ${size.height}`} /> },
    { name: "TypeScript", icon: <SiTypescript className={`${size.widht} ${size.height}`} /> },
  ]

  return (
    <div className="flex flex-col items-center">
      <PageTitle>HABILIDADES</PageTitle>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <Tooltip key={index} label={skill.name}>
            <Card
              className="transition ease-in-out delay-150 hover:animate-bounce hover:bg-black dark:hover:bg-white hover:text-muted"
            >
              <CardContent className="pt-6">
                {skill.icon}
              </CardContent>
            </Card>
          </Tooltip>
        ))}
      </div>

    </div>
  )
}
