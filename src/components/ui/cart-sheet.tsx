import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Cart from "./cart";

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[90vw]">
        <Cart />
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
