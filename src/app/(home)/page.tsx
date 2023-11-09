"use client";
import Categories from "./components/categories";
import PromoBanner from "./components/promo-banner";
import Image from "next/image";
import Link from "next/link";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return (
    <>
      <div className="mx-auto flex flex-col gap-8 py-8 lg:container lg:gap-10">
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
      </div>
    </>
  );
}
