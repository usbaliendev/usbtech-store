"use client";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/providers/cart";
import Cart from "./cart";
import { Badge } from "./badge";

const CartSheet = () => {
  const { products } = useContext(CartContext);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartQuantityItems = products.reduce((acc, product) => {
    return acc + 1 * product.quantity;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="relative">
          <ShoppingCartIcon />
          {isClient && cartQuantityItems > 0 && (
            <Badge
              className={`${
                cartQuantityItems >= 100 && "px-4"
              } absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center text-xs font-bold`}
            >
              {cartQuantityItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[90vw]">
        <Cart />
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
