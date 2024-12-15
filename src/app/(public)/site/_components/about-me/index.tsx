import Button from "@/components/button";
import SectionSite from "@/components/section-site";
import Image from "next/image";

export default function AboutMe() {
  return (
    <SectionSite isSecondBackground dataTitle={{ first: "Sobre", second: "Mim" }}>
      <div className="flex flex-col items-center">
        <Image
          src="/images/about.jpg"
          alt="Sobre mim"
          width={100}
          height={100}
          className="w-[15rem] rounded-full border-2 border-background-blue-light"
        />

        <h3 className="my-8 text-2xl font-bold">Frontend Developer</h3>
        <p className="mb-8">
          smdkamsldkmasldmaslkdmalsmdalksmdlaksd aslkdmaslkdmaslkdmaslkdmaslkdmalskd dkamlskdmalskdmlaskd.
        </p>
        <Button>Read More</Button>
      </div>
    </SectionSite>
  )
}
