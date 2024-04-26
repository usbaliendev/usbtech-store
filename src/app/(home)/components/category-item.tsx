import { Badge } from "@/components/ui/badge";
import { CategoryIcon } from "@/constants/category-icons";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
      <Link href={`/category/${category.slug}`}>
        <Badge
          variant="outline"
          className="flex items-center justify-center gap-2 rounded-lg py-3"
        >
          {CategoryIcon[category.slug as keyof typeof CategoryIcon]}
          <span className="text-xs font-bold">{category.name}</span>
        </Badge>
      </Link>
    </>
  );
};

export default CategoryItem;
