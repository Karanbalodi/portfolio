import Image from "next/image";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { SocialNavigation } from "../social-navigation";
import Me from "@/assets/me.webp";
import { Highlighter } from "../magicui/highlighter";

export const HomeLandingMobile = () => (
  <section className="border-b border-gray-200 mx-4 pb-12">
    <main className="flex flex-col select-none">
      <div
        className="border border-black self-center border-2 border-yellow-200 rounded bg-yellow-100 mt-32 ml-6"
        style={{ height: 288, width: 210 }}
      >
        <Image
          src={Me}
          alt="Karan Balodi"
          style={{ height: 288, width: 210 }}
          className="-ml-6 -mt-6 rounded"
        />
      </div>

      <div className="flex flex-col justify-center mt-6">
        <p className="text-primary text-xl font-medium subpixel-antialiased text-center leading-7">
          Namaste 🙏🏻 I&apos;m Karan
          <br /> A{" "}
          <Highlighter
            className="bg-pink-100 rounded px-1 text-pink-800"
            action="underline"
            color="oklch(45.9% 0.187 3.815)"
          >
            Developer
          </Highlighter>
          &{" "}
          <Highlighter
            className="bg-green-100 rounded px-1 text-green-800"
            action="underline"
            color="oklch(43.2% 0.095 166.913)"
          >
            Design enthusiast
          </Highlighter>
          .
        </p>
        <AnimatedShinyText className="mt-4 transition ease-out text-center">
          <span>💼 Software Engineer @ Aston Martin Aramco Formula 1 Team</span>
        </AnimatedShinyText>
        <AnimatedShinyText className="mt-1 transition ease-out text-center">
          <span>📍 Silverstone, United Kingdom</span>
        </AnimatedShinyText>
        <SocialNavigation />
      </div>
    </main>
  </section>
);
