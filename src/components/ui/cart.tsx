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

import { Button } from "./button";
import Link from "next/link";
import CartItem from "./cart-item";
import { Separator } from "./separator";
import { AlertCircle } from "lucide-react";
import { computeProductTotalPrice } from "@/helpers/product";

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
      {products.length ? (
        <div className="h-full">
          <div className="flex h-[90%] flex-col space-y-2">
            <div className="mb-3 flex flex-col gap-4">
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  // product={computeProductTotalPrice(product as any) as any}
                />
              ))}
            </div>
            <Separator />
            <div className="flex justify-between text-sm opacity-80">
              <h4>Subtotal</h4>
              <h4>R$ XXX,YY</h4>
            </div>
            <Separator />
            <div className="flex justify-between text-sm opacity-80">
              <h4>Entrega</h4>
              <h4>GRÁTIS</h4>
            </div>
            <Separator />
            <div className="flex justify-between text-sm opacity-80">
              <h4>Descontos</h4>
              <h4>- R$ XXX,YY</h4>
            </div>
            <Separator />
            <div className="flex justify-between text-sm font-bold opacity-">
              <h4>Total</h4>
              <h4>R$ XXX,YY</h4>
            </div>
          </div>
          <Button variant="default" className="w-full text-foreground">
            Finalizar compra
          </Button>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-sm">
          <AlertCircle /> Carrinho vazio, adicione itens aqui
        </div>
      )}
    </div>
  );
};

export default Cart;
