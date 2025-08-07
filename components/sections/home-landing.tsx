import Image from "next/image";
import Me from "@/assets/me.webp";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { SocialNavigation } from "@/components/social-navigation";

export const HomeLanding = () => (
  <section className="min-h-screen border-b border-gray-200 sm:mx-8 mx-4 flex items-center">
    <main className="pb-10 flex sm:flex-row sm:justify-between flex-col select-none">
      <div className="mt-10 flex flex-col justify-center sm:mt-0 sm:mr-20">
        <p className="p-force-lineheight text-primary text-2xl sm:text-5xl text-2xl font-medium subpixel-antialiased">
          Namaste 🙏🏻 I'm Karan. A{" "}
          <span className="bg-pink-100 underline text-pink-800 rounded px-1">
            Developer
          </span>{" "}
          &{" "}
          <span className="bg-green-100 underline text-green-800 rounded px-1">
            Design enthusiast
          </span>
          .
        </p>
        <AnimatedShinyText className="mt-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>
            💼 Software Engineer @ Aston Martin Aramco F1 Team
            <span className="text-3xl"> 🏎️</span>
          </span>
        </AnimatedShinyText>
        <AnimatedShinyText className="mt-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>📍 Silverstone, United Kingdom</span>
        </AnimatedShinyText>

        <p className="mt-6 text-dark-gray">We can connect here:</p>
        <SocialNavigation />
      </div>
      <NeonGradientCard className="hidden sm:block mt-20 w-auto">
        <Image
          src={Me}
          alt="Karan Balodi"
          style={{ borderRadius: 18, width: 650, height: 600 }}
        />
      </NeonGradientCard>
    </main>
  </section>
);
