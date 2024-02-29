import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import SectionTitle from "@/components/ui/section-title";
import ProductList from "@/components/ui/product-list";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="grid gap-8 p-5">
      <div className="grid gap-8">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo
          product={{
            ...product,
            totalPrice: computeProductTotalPrice(product),
          }}
        />
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
