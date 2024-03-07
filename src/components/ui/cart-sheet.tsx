import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import Cart from "./cart";

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <Cart />
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
