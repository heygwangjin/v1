import { data } from '@/data';

import EducationIcon from '@/components/EducationIcon';

function Education() {
  return (
    <>
      <div className="flex items-center justify-start gap-1">
        <EducationIcon />
        <h2 className="text-lg font-medium">Education</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data.education.map((study, index) => {
          const { school, url, degree, location, date, grade } = study;
          return (
            <div
              key={'education-' + index}
              className="flex w-full flex-col items-start justify-start gap-1"
            >
              <h3 className="text-balance font-medium">{degree}</h3>
              <p className="text-sm text-foreground/50">
                <a
                  href={url}
                  target="_blank"
                  className="underline transition-colors duration-150 hover:text-foreground/80"
                >
                  {school}
                </a>{' '}
                / {date}
              </p>
              <p className="text-sm text-foreground/50">Grade: {grade}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Education;
