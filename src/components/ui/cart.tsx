"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import PageBadge from "./page-badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./button";
import Link from "next/link";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="flex h-full flex-col gap-7">
      <SheetHeader className=" mb-2 text-left text-lg font-semibold">
        <SheetTitle>
          <PageBadge name="Carrinho" />
        </SheetTitle>
      </SheetHeader>

      {/* RENDERIZAR OS PRODUTOS */}
      <div className="h-full space-y-8">
        <div className="flex h-[90%] flex-col">
          {products.map((product) => (
            <h1 key={product.id}>{product.name}</h1>
          ))}
          <Separator />
          <div className="flex justify-between text-sm">
            <h4>Subtotal</h4>
            <h4>R$ XXX,YY</h4>
          </div>
          <Separator />
          <div className="flex justify-between text-sm">
            <h4>Entrega</h4>
            <h4>GRÁTIS</h4>
          </div>
          <Separator />
          <div className="flex justify-between text-sm">
            <h4>Descontos</h4>
            <h4>- R$ XXX,YY</h4>
          </div>
          <Separator />
          <div className="flex justify-between text-sm font-bold">
            <h4>Total</h4>
            <h4>R$ XXX,YY</h4>
          </div>
        </div>
        <Button className="w-full text-foreground">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default Cart;
