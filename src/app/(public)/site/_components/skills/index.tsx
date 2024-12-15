import SectionSite from "@/components/section-site";
import { FaNodeJs, FaReact, FaLaravel, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const size = {
    widht: 'w-10',
    height: 'h-10'
  }

  const skills: Array<{ name: string, icon: React.ReactNode }> = [
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
    <SectionSite isSecondBackground dataTitle={{ first: "Minhas", second: "Habilidades" }}>
      <div className="flex justify-center gap-4">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="transition ease-in-out delay-150 hover:animate-bounce hover:bg-black dark:hover:bg-white hover:text-muted"
          >
            <CardContent className="pt-6">
              {skill.icon}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionSite>
  )
}
