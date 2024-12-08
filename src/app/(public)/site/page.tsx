import dynamic from "next/dynamic";
const CallToAction = dynamic(() => import("./_components/call-to-action"));
const Skills = dynamic(() => import("./_components/skills"));

export default function Site() {
  return (
    <>
      <CallToAction />
      <Skills />
    </>
  )
}
