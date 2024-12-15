import Button from "@/components/button";
import ButtonIcon from "@/components/button-icon";
import SectionSite from "@/components/section-site";
import { LinkedinIcon, InstagramIcon, GithubIcon } from "lucide-react"

export default function CallToAction() {
  return (
    <SectionSite className="relative flex justify-between items-center py-0 bg-[url('/images/home.jpg')] bg-cover bg-center">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[3.5rem] font-semibold">Oi, eu sou o Weslley</h1>
          <h3 className="text-3xl font-bold mb-4 text-stroke">Frontend Developer</h3>
          <p>Alguma coisa sobre eu</p>

          <div className="flex gap-8 my-8">
            <Button>Hire me</Button>
            <Button reverse>Hire me</Button>
          </div>
        </div>
        <div className="absolute bottom-16 flex gap-6">
          <ButtonIcon isRounded><LinkedinIcon /></ButtonIcon>
          <ButtonIcon isRounded><InstagramIcon /></ButtonIcon>
          <ButtonIcon isRounded><GithubIcon /></ButtonIcon>
        </div>
      </div>
    </SectionSite>
  )
}
