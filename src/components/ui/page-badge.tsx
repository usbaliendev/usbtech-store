import React from "react";
import { Badge } from "./badge";
import { ShapesIcon } from "lucide-react";

interface PageBadgeProps {
  name: string;
  className?: string;
}

const PageBadge = ({ name, className }: PageBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className="w-fit  gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
    >
      <ShapesIcon size={16} />
      {name}
    </Badge>
  );
};

export default PageBadge;
