"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  // const { addProductCart} = useContext(CartContext)

  const handleDescreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col gap-4">
        <div className="gap-2">
          {/* <h3>Novo | 100 vendidos</h3> */}
          <h2 className="text-lg lg:text-2xl">{product.name}</h2>
          {/* <h3>Disponível em estoque</h3> */}
          {/* <div>★★★★★ (n avaliações)</div> */}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold lg:text-3xl">
              R$ {product.totalPrice.toFixed(2)}
            </h1>
            {product.discountPercentage > 0 && (
              <DiscountBadge>{product.discountPercentage}</DiscountBadge>
            )}
          </div>
          {product.discountPercentage > 0 && (
            <p className="text-sm opacity-75 lg:text-base">
              De:{" "}
              <small className="text-sm line-through">
                R$ {Number(product.basePrice).toFixed(2)}
              </small>
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={handleDescreaseQuantity}>
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseQuantity}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit
          qui laborum facilis cupiditate labore sunt maxime minus! Accusantium
          ex temporibus consequatur culpa id itaque commodi. <br />
          <br />
          Adipisci libero unde nesciunt? Voluptas, quas architecto quaerat
          minus, cum perferendis in tenetur nesciunt asperiores impedit nihil
          necessitatibus fugiat hic labore expedita! Doloremque, tempora.
        </p>
      </div>

      <Button className="w-full justify-center rounded-md bg-primary py-2 font-bold uppercase tracking-wider">
        Adicionar ao Carrinho
      </Button>

      <div className="flex items-center justify-between rounded-md bg-accent px-6 py-2">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 13.5L2.25 12H7.5l-.6-1.5H2L1.25 9h7.8l-.6-1.5H1.11L.25 6H4a2 2 0 0 1 2-2h12v4h3l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H4v-3.5zm16 5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5m1.5-9H18V12h4.46zM9 18.5a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 9 15.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 9 18.5"
            ></path>
          </svg>
          <div className="flex flex-col">
            <p>
              Entrega via <em className="font-bold"> FastPackage</em>
              <strong className="align-super font-normal">®</strong>
            </p>
            <p className="text-primary">
              Envio para <strong>todo brasil</strong>
            </p>
          </div>
        </div>
        <strong className="text-sm">Frete Grátis</strong>
      </div>
    </div>
  );
};

export default ProductInfo;
