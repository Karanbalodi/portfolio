import { techStack, techStackIcons } from "@/constants";
import { IconCloud } from "../magicui/icon-cloud";
import { SkillPill } from "../skill-pill";

export const TechStack = () => {
  const images = techStackIcons.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <section
      id="tech-stack"
      className="sm:px-12 py-12 border-b border-gray-200 mx-4"
    >
      <h2 className="text-primary text-4xl font-medium">Technical Stack</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:px-12">
        <IconCloud images={images} />
        <div className="sm:ml-20 flex flex-wrap gap-2 items-center">
          {techStack.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
