import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDescreaseQuantity = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseQuantity = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveItem = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="flex w-full items-center space-x-4">
      <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">R$ {product.totalPrice.toFixed(2)}</p>
            <h3 className="text-xs line-through opacity-75">
              R$ {product.totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleDescreaseQuantity}
          >
            <ArrowLeftIcon size={16} />
          </Button>
          <span>{product.quantity}</span>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleIncreaseQuantity}
          >
            <ArrowRightIcon size={16} />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8"
          onClick={handleRemoveItem}
        >
          <Trash size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
