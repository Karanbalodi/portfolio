import { education } from "@/constants";
import { Educationtile } from "../education-tile";

export const Education = () => {
  return (
    <section
      id="education"
      className=" mx-4 sm:px-12 py-12 border-b border-gray-200"
    >
      <h2 className="text-primary text-4xl font-medium mb-6">Education</h2>
      {education?.map((edu) => (
        <Educationtile
          key={edu.title}
          title={edu.title}
          subtitle={edu.subtitle}
          description={edu.description}
          aggregate={edu.aggregate}
          redirectUrl={edu.redirectUrl}
          color={edu.color}
        />
      ))}
    </section>
  );
};
