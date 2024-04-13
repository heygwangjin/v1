import { data } from '@/data';

import TechnologiesList from '@/components/TechnologiesList';
import WorkExperienceIcon from '@/components/WorkExperienceIcon';

function WorkExperience() {
  return (
    <>
      <div className="flex justify-start items-center gap-1">
        <WorkExperienceIcon />
        <h2 className="font-medium">Work Experience</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.experience.map((work, index) => {
          const { company, url, role, location, date, descriptions } = work;
          return (
            <div
              key={'work-experience-' + index}
              className="w-full flex flex-col justify-start items-start gap-2"
            >
              <h3 className="font-medium">{role}</h3>
              <p className="text-sm text-neutral-500">
                <a
                  href={url}
                  target="_blank"
                  className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150 underline"
                >
                  {company}
                </a>{' '}
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
