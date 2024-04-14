import { data } from "@/data";

import TechnologiesList from "@/components/TechnologiesList";
import WorkExperienceIcon from "@/components/WorkExperienceIcon";

function WorkExperience() {
  return (
    <>
      <div className="flex items-center justify-start gap-1">
        <WorkExperienceIcon />
        <h2 className="text-lg font-medium">Work Experience</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.experience.map((work, index) => {
          const { company, url, role, location, date, descriptions } = work;
          return (
            <div
              key={"work-experience-" + index}
              className="flex w-full flex-col items-start justify-start gap-1"
            >
              <h3 className="font-medium">{role}</h3>
              <p className="text-sm text-neutral-500">
                <a
                  href={url}
                  target="_blank"
                  className="underline transition-colors duration-150 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                  {company}
                </a>{" "}
                / {date}
              </p>
              <TechnologiesList technologies={work.technologies} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkExperience;
