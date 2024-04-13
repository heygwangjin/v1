interface TechnologiesListProps {
  technologies: string[];
}

function TechnologiesList({ technologies }: TechnologiesListProps) {
  return (
    <div className="w-full flex justify-start items-center gap-2 flex-wrap py-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="text-xs text-neutral-500 dark:text-neutral-400 font-geistmono bg-neutral-250 dark:bg-neutral-850 px-2 py-1 rounded-md"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}

export default TechnologiesList;
