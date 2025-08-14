import spinny from "@/assets/spinny.webp";
import razorpay from "@/assets/razorpay.webp";
import pokerbaazi from "@/assets/pokerbaazi.webp";
import aston_martin from "@/assets/aston_martin.webp";
import causalfunnel from "@/assets/causalfunnel.webp";
import One from "@/assets/one.webp";
import Two from "@/assets/two.webp";
import Three from "@/assets/three.webp";
import Four from "@/assets/four.webp";
import Five from "@/assets/five.webp";
import Six from "@/assets/six.webp";
import Seven from "@/assets/seven.webp";
import Eight from "@/assets/eight.webp";
import Nine from "@/assets/nine.webp";
import Ten from "@/assets/ten.webp";
import Eleven from "@/assets/eleven.webp";
import Twelve from "@/assets/twelve.webp";
import Fourteen from "@/assets/fourteen.webp";
import Fifteen from "@/assets/fifteen.webp";
import Sixteen from "@/assets/sixteen.webp";

export const workExperience = [
  {
    id: "astonmartin",
    name: "Aston Martin Aramco F1 Team",
    description:
      "Working in the Performance Software Group at Aston Martin Formula One Team, where I help build tools that push the limits of racing performance and data visualization. I build various tools for teams like Aerodynamics and Vehicle Science to enable them to make a fast car.",
    dates: "December 2024 - Present",
    location: "Silverstone, United Kingdom",
    role: "Software Engineer",
    image: aston_martin,
  },
  {
    id: "poker",
    name: "Pokerbaazi",
    description:
      "I worked with the Growth Team at PokerBaazi, delivering impactful features like advanced analytics, video streaming and a poker hand replayer. I developed and optimized UI components for mobile, web, and desktop applications, leveraging a unified codebase to streamline development and significantly reduce go-to-market time. My contributions enhanced user engagement, improved gameplay insights, and delivered seamless cross-platform experiences.",
    dates: "November, 2023 - November 2024",
    location: "New Delhi, India",
    role: "Software Development Engineer 2",
    image: pokerbaazi,
  },
  {
    id: "rzp",
    name: "Razorpay",
    description:
      "I joined the RazorpayX digital banking suite team, contributing to the development of India's next-generation business banking application, widely used by millions of businesses. My role focused on delivering high-quality, unit-tested components with 85–90% test coverage, ensuring robust code quality and minimizing bugs. I actively collaborated across all stages of the software development lifecycle, from requirement gathering to production releases, driving seamless and reliable user experiences.",
    dates: "July, 2022 - November, 2023",
    location: "Bangalore, India",
    role: "Frontend Engineer",
    image: razorpay,
  },
  {
    id: "spinny",
    name: "Spinny",
    description:
      "I collaborated with the HUB Frontend team at Spinny, where I contributed to modernizing and optimizing the application. My role involved transitioning the existing React Native codebase to a Redux architecture for enhanced state management and maintainability. I worked on integrating GraphQL APIs via Apollo, streamlining backend data retrieval processes. Additionally, I developed persistent storage solutions and offline functionality using optimistic response architecture to ensure seamless app usage in environments with limited connectivity.",
    dates: "October, 2021 - June, 2022",
    location: "Gurugram, India",
    role: "Software Development Engineer",
    image: spinny,
  },
  {
    id: "causal",
    name: "Causal Funnel",
    description:
      "Worked with a team of ex-Apple and Microsoft senior data scientists to build an eCommerce funnel optimization platform. Developed interactive visualizations using Angular, optimized client-side performance for handling large datasets, and implemented scalable Firebase Cloud Functions for real-time dashboards. Also integrated Google PSI, managed cookies, and enabled advanced data filtering.",
    dates: "July, 2022 - November, 2023",
    location: "San Francisco, USA (Remote)",
    role: "Software Development Engineer Intern",
    image: causalfunnel,
  },
];

export const techStackIcons = [
  "typescript",
  "javascript",
  "angular",
  "tailwindcss",
  "redux",
  "mobx",
  "electron",
  "sass",
  "graphql",
  "opentelemetry",
  "react",
  "android",
  "html5",
  "css",
  "nodedotjs",
  "nextdotjs",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "git",
  "figma",
  "ios",
];

export const techStack = [
  "React",
  "React Native",
  "NextJS",
  "Typescript",
  "Javascript",
  "GraphQL",
  "Redux/MobX",
  "NodeJS",
  "Firebase",
  "Angular",
  "Tailwind CSS",
  "SASS",
  "Opentelemetry",
  "Java",
  "Android",
  "CSS",
  "Vercel",
  "ElectronJS",
  "Testinglibrary",
  "Jest",
  "Figma",
  "iOS",
  "Webpack",
  "Branch/Appsflyer",
  "Grafana",
];

export const navigation = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Photography", path: "/photography" },
];

export const education = [
  {
    title: "Maharaja Surajmal Institute Of Technology, GGSIPU",
    subtitle: "🗓 2018 - 2022 |  New Delhi, India 🇮🇳",
    description: "Major: Information Technology",
    aggregate: "8.90/10",
    redirectUrl: "https://www.msit.in/",
    color: "yellow",
  },
  {
    title: "The Frank Anthony Public School",
    subtitle: "🗓 2005 - 2017 |  New Delhi, India 🇮🇳",
    description:
      "Subjects: Mathematics, Physics, Chemistry, English, Computer Science",
    aggregate: "85.3%",
    redirectUrl: "https://fapsnewdelhi.net/",
    color: "red",
  },
];

export const blogs = [
  {
    title:
      "What is a PWA and how to convert your React Native app into a PWA using Expo",
    description:
      "A progressive web app is a website that can be installed on the user device and can be used offline. The idea of a PWA was introduced by Steve Jobs in 2007 ...",
    date: "June 2020",
    readTime: "5 min read",
    views: "4.5k+ views",
    link: "https://medium.com/coox-tech/what-is-a-progressive-web-app-pwa-and-how-to-convert-your-react-native-app-into-a-pwa-using-expo-11540ff116a",
  },
  {
    title:
      "Javascript Interface(JSI): Overview and need for re-architecture of react native",
    description:
      "React Native is bundled with multiple advantages like cross-platform suppoert, OTA updates, live reload, cost efficiency etc but the biggest bottleneck in scaling ...",
    date: "November 2022",
    readTime: "5 min read",
    views: "8k+ views",
    link: "https://medium.com/@karanbalodi/javascript-interface-jsi-overview-and-need-for-re-architecture-of-react-native-6ab6a7b3f660",
  },
];

export const photos = [
  { url: One, location: "Golden Gate Bridge, San Francisco" },
  { url: Fourteen, location: "Three Sisters, Oregon" },
  { url: Two, location: "Lombard Street, San Francisco" },
  { url: Three, location: "Astoria, Oregon" },
  { url: Four, location: "Golden Gate Bridge, San Francisco" },
  { url: Six, location: "Creater Lake, Oregon" },
  { url: Nine, location: "Jammu, India" },
  { url: Sixteen, location: "Pacific City, Oregon" },
  { url: Seven, location: "Austin, Texas" },
  { url: Eight, location: "Centre Island, Toronto" },
  { url: Twelve, location: "Niagara Falls, Canada" },
  { url: Eleven, location: "Notre-Dame Basilica, Montreal" },
  { url: Ten, location: "Centre Island, Toronto" },
  { url: Five, location: "Seattle, Washington" },
  { url: Fifteen, location: "Cape Kiwanda, Oregon" },
];
