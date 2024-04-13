import { data } from '@/data';

import EducationIcon from '@/components/EducationIcon';

function Education() {
  return (
    <>
      <div className="flex justify-start items-center gap-1">
        <EducationIcon />
        <h2 className="font-medium">Education</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.education.map((study, index) => {
          const { school, url, degree, location, date, grade } = study;
          return (
            <div
              key={'education-' + index}
              className="w-full flex flex-col justify-start items-start gap-1"
            >
              <h3 className="font-medium text-balance">{degree}</h3>
              <p className="text-sm text-neutral-500">
                <a
                  href={url}
                  target="_blank"
                  className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150 underline"
                >
                  {school}
                </a>{' '}
                / {date}
              </p>
              <p className="text-sm text-neutral-500">Grade: {grade}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Education;
