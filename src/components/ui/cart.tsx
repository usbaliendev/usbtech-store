"use client";

import { SheetHeader, SheetTitle } from "./sheet";
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
  const { products, total, subTotal, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex h-full flex-col gap-7">
      <SheetHeader className=" mb-2 text-left text-lg font-semibold">
        <SheetTitle>
          <PageBadge name="Carrinho" />
        </SheetTitle>
      </SheetHeader>

      {/* RENDERIZAR OS PRODUTOS */}
      {products.length ? (
        <div className="flex h-full flex-col">
          <div className="flex-1">
            <div className="mb-4 flex flex-col gap-4">
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  // product={computeProductTotalPrice(product as any) as any}
                />
              ))}
            </div>
            <Separator />
            <div className="flex justify-between text-xs opacity-80">
              <h4>Subtotal</h4>
              <h4>R$ {subTotal.toFixed(2)}</h4>
            </div>
            <Separator />
            <div className="flex justify-between text-xs opacity-80">
              <h4>Entrega</h4>
              <h4>GRÁTIS</h4>
            </div>
            <Separator />
            <div className="flex justify-between text-xs opacity-80">
              <h4>Descontos</h4>
              <h4>- R$ {totalDiscount.toFixed(2)}</h4>
            </div>
            <Separator />
            <div className="opacity- flex justify-between text-sm font-bold">
              <h4>Total</h4>
              <h4>R$ {total.toFixed(2)}</h4>
            </div>
          </div>
          <Button variant="default" className="w-full text-foreground">
            Finalizar compra
          </Button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center text-sm">
          <div className="flex items-center gap-3">
            <AlertCircle />
            <p>Carrinho vazio!</p>
          </div>
          <p>Você ainda não tem nenhum produto ...</p>
          <p className="font-semibold">Adicione itens aqui</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
