"use client";
import { ShoppingCartIcon } from "lucide-react";
import React, { useContext } from "react";
import { Button } from "./button";
import { Badge } from "./badge";
import Cart from "./cart";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { CartContext } from "@/providers/cart";

export const CartBadge = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="fixed bottom-10 right-5 z-50 flex items-center justify-center">
      {products.length > 0 && (
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="border-2">
                <ShoppingCartIcon />
                <Badge className="absolute -right-1 -top-1 rounded-full px-1 py-[0.5] text-xs text-white">
                  {products.length}
                </Badge>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[90vw]">
            <Cart />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};
