import PageBadge from "@/components/ui/page-badge";
import CategoryItem from "./components/category-item";
import { prismaClient } from "@/lib/prisma";

const Catalog = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex flex-col gap-8 p-5">
      <PageBadge name="Catálogo" />

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
