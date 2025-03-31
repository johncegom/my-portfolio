import { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "circular" | "text" | "rectangular" | "badge";
}

const Skeleton = ({
  className,
  variant = "default",
  ...props
}: SkeletonProps) => {
  const variantClasses = {
    default: "rounded-md",
    circular: "rounded-full",
    rectangular: "rounded-none",
    text: "rounded",
    badge: "rounded-tr-sm",
  };

  return (
    <div
      className={`animate-pulse bg-gray-700/50 ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Skeleton;
