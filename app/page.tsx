import { HomeLanding } from "@/components/sections/home-landing";
import { HomeLandingMobile } from "@/components/sections/home-landing-mobile";
import { TechStack } from "@/components/sections/home-tech-stack";
import { WorkExperience } from "@/components/sections/home-work-experience";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Home() {
  return (
    <>
      <div className="hidden sm:block">
        <HomeLanding />
      </div>
      <div className="block sm:hidden">
        <HomeLandingMobile />
      </div>
      <WorkExperience />
      <TechStack />
    </>
  );
}
