import { workExperience } from "@/constants";
import { ExperienceCard } from "@/components/experience-card";

export const WorkExperience = () => (
  <section id="hackathons" className="space-y-12 w-full px-12 py-12 border-b border-gray-200">
    <h2 className="text-primary text-4xl font-medium">Work Experience</h2>
    <div className="px-8 mt-7">
      <ul className="mb-4 ml-3 divide-y divide-dashed border-l">
        {workExperience.map((work, idx) => (
          <div key={work.id}>
            <ExperienceCard
              index={idx}
              title={work.name}
              description={work.description}
              location={work.location}
              dates={work.dates}
              role={work.role}
              image={work.image}
              // links={project.links}
            />
          </div>
        ))}
      </ul>
    </div>
  </section>
);
