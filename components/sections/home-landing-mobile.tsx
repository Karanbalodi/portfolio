import Image from "next/image";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { SocialNavigation } from "../social-navigation";
import Me from "@/assets/me.webp";

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
          Namaste 🙏🏻 I'm Karan
          <br /> A{" "}
          <span className="bg-pink-100 underline text-pink-800 rounded px-1">
            Developer
          </span>{" "}
          &{" "}
          <span className="bg-green-100 underline text-green-800 rounded px-1">
            Design enthusiast
          </span>
        </p>
        <AnimatedShinyText className="mt-4 transition ease-out text-center">
          <span>💼 Software Engineer @ Aston Martin Aramco Formula 1 Team</span>
        </AnimatedShinyText>
        <AnimatedShinyText className="mt-1 transition ease-out text-center">
          <span>📍 Silverstone, United Kingdom</span>
        </AnimatedShinyText>

        {/* <p className="mt-6 text-dark-gray">We can connect here:</p> */}
        <SocialNavigation />
      </div>
    </main>
  </section>
);
