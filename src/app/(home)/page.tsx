import { useSession } from "next-auth/react";
import { prismaClient } from "@/lib/prisma";

import Categories from "./components/categories";
import PromoBanner from "./components/promo-banner";
import Image from "next/image";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <>
      <div className="mx-auto flex flex-col gap-8 pt-8 lg:container lg:gap-10">
        <div className="p-5">
          <Image
            src="/banner-home-01.png"
            height={0}
            width={0}
            className="h-auto w-full"
            sizes="100vw"
            alt="Ate 55% de desconto esse mês!"
          />
        </div>

        <div className="px-5 lg:mt-2">
          <Categories />
        </div>

        <div className="flex flex-col gap-3 pl-5 lg:gap-5">
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="p-5">
          <PromoBanner
            src="/banner-home-02.png"
            alt="Ate 55% de desconto em mouses!"
          />
        </div>

        <div className="flex flex-col gap-3 pl-5 lg:gap-5">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>

        <div className="p-5">
          <PromoBanner
            src="/banner-home-03.png"
            alt="Ate 20% de desconto em fones!"
          />
        </div>

        <div className="flex flex-col gap-3 pl-5 lg:gap-5">
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>
      </div>
    </>
  );
}
