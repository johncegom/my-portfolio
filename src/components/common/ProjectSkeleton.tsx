import Skeleton from "./Skeleton";

const ProjectSkeleton = () => {
  return (
    <div className="md:flex-[1_380px] border border-gray-500 rounded-md p-5 flex flex-col shadow-black/50 shadow-lg relative gap-5">
      {/* Image skeleton */}
      <Skeleton
        className="w-full h-48 lg:aspect-video mt-7"
        variant="rectangular"
      />
      {/* Title skeleton */}
      <Skeleton className="h-8 w-3/4 mt-9" variant="text" />
      {/* Description skeleton */}
      <div className="mt-1 space-y-2">
        <Skeleton className="h-4 w-full" variant="text" />
        <Skeleton className="h-4 w-5/6" variant="text" />
        <Skeleton className="h-4 w-4/6" variant="text" />
      </div>
      {/* Technologies skeleton */}
      <Skeleton className="h-4 w-1/2 mt-10" variant="text" />
      {/* Buttons skeleton */}
      <div className="flex justify-evenly mt-2 gap-3">
        <Skeleton className="flex-1 h-12" variant="circular" />
        <Skeleton className="flex-1 h-12" variant="circular" />
      </div>
      {/* Project type badge skeleton */}
      <Skeleton className="absolute right-0 top-0 h-10 w-28" variant="badge" />
    </div>
  );
};

interface ProjectsLayoutSkeletonProps {
  count?: number;
}

/**
 * Skeleton component for the projects layout.
 * Renders a specified number of project skeleton components in a flex layout.
 * Used for loading states before actual project data is available.
 *
 * @param {object} props - Component props
 * @param {number} [props.count=3] - Number of skeleton items to render
 * @returns {JSX.Element} - A flex container with multiple project skeleton components
 */
export const ProjectsLayoutSkeleton = ({
  count = 3,
}: ProjectsLayoutSkeletonProps) => {
  const skeletons = Array.from({ length: count }, (_element, index) => (
    <ProjectSkeleton key={`project-skeleton-${index}`} />
  ));
  return <div className="flex gap-6 mt-10 flex-wrap">{skeletons}</div>;
};

export default ProjectSkeleton;
