import { techStack } from "@/constants";
import { IconCloud } from "../magicui/icon-cloud";

export const TechStack = () => {
  const images = techStack.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <section
      id="hackathons"
      className="space-y-12 w-full px-12 py-12 border-b border-gray-200"
    >
      <h2 className="text-primary text-4xl font-medium">Technical Stack</h2>
      <IconCloud images={images} />
    </section>
  );
};
