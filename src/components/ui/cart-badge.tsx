"use client";
import { ShoppingCartIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./button";
import { Badge } from "./badge";
import Cart from "./cart";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { CartContext } from "@/providers/cart";
import { cn } from "@/lib/utils";

export const CartBadge = () => {
  const { products } = useContext(CartContext);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && products.length > 0 && (
        <div
          className={cn(
            "fixed bottom-10 right-5 z-50 flex items-center justify-center",
          )}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="border-2">
                <ShoppingCartIcon />
                <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                  {products.length}
                </Badge>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[90vw]">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};
