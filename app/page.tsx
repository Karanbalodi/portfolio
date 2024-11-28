import Image from "next/image";
import Me from "@/assets/me.webp";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { SocialNavigation } from "@/components/social-navigation";
import { WorkExperience } from "@/sections/work-experience";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Home() {
  return (
    <>
      <div className="min-h-screen border-b border-gray-200 sm:mx-8 mx-4 flex items-center">
        <main className=" pb-10 flex sm:flex-row sm:justify-between flex-col select-none">
          <div
            className="sm:hidden border border-black self-center border-2 border-yellow-200 rounded bg-yellow-100"
            style={{ height: 288, width: 210 }}
          >
            <Image
              src={Me}
              alt="Karan Balodi"
              style={{ height: 288, width: 210 }}
              className="-ml-6 -mt-6 rounded"
            />
          </div>

          <div className="mt-10 flex flex-col justify-center sm:mt-0 sm:mr-20">
            <p className="p-force-lineheight text-primary text-2xl sm:text-5xl text-2xl font-medium subpixel-antialiased">
              Namaste 🙏🏻 I'm Karan. A{" "}
              <span className="bg-pink-100 underline text-pink-800 rounded px-1">
                Developer
              </span>
              ,{" "}
              <span className="bg-green-100 underline text-green-800 rounded px-1">
                Designer
              </span>{" "}
              &{" "}
              <span className="bg-yellow-100 underline text-yellow-800 rounded px-1">
                {" "}
                Avid traveller
              </span>
              .
            </p>

            <AnimatedShinyText className="mt-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>
                💼 Software Engineer @ Aston Martin Aramco F1 Team{" "}
                <span className="text-3xl">🏎️</span>
              </span>
            </AnimatedShinyText>
            <AnimatedShinyText className="mt-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>📍 Silverstone, United Kingdom</span>
            </AnimatedShinyText>

            <p className="mt-6 text-dark-gray">We can connect here:</p>
            <SocialNavigation />
          </div>
          <div className="hidden sm:block mt-20">
            <NeonGradientCard>
              <Image src={Me} alt="Karan Balodi" style={{ borderRadius: 18 }} />
            </NeonGradientCard>
          </div>
        </main>
      </div>
      <WorkExperience />
    </>
  );
}
