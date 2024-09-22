interface TechnologiesListProps {
  technologies: string[];
}

function TechnologiesList({ technologies }: TechnologiesListProps) {
  return (
    <div className="flex w-full flex-wrap items-center justify-start gap-2 py-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-md bg-neutral-250 px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-850 dark:text-neutral-400"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}

export default TechnologiesList;
