import Skeleton from "./Skeleton";

const ProjectSkeleton = () => {
  return (
    <div className="md:flex-[1_380px] border border-gray-500 rounded-md p-5 flex flex-col shadow-black/50 shadow-lg relative gap-5">
      {/* Image skeleton */}
      <ProjectImageSkeleton />
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

export const ProjectImageSkeleton = () => {
  return (
    <Skeleton
      className="w-full h-48 lg:aspect-video mt-7"
      variant="rectangular"
    />
  );
};

interface ProjectImageFallbackProps {
  title: string;
}

export const ProjectImageFallback = ({ title }: ProjectImageFallbackProps) => {
  return (
    <div className="w-full h-52 lg:aspect-video bg-gray-800 flex items-center justify-center text-gray-400 rounded lg:object-contain">
      <div className="text-center p-4">
        <svg
          className="w-10 h-10 mx-auto mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
