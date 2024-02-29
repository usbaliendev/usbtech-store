import React from "react";
import { Badge } from "./badge";
import { LayoutGrid } from "lucide-react";
import { CategoryIcon } from "@/constants/category-icons";

interface PageBadgeProps {
  name: string;
  slug?: string;
}

const PageBadge = ({ name, slug }: PageBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className="w-fit gap-3 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
    >
      {slug ? (
        <>{CategoryIcon[slug as keyof typeof CategoryIcon]}</>
      ) : (
        <LayoutGrid size={16} />
      )}
      {name}
    </Badge>
  );
};

export default PageBadge;