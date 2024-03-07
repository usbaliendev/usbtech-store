"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [displayImage, setDisplayImage] = useState(imageUrls[0]);

  const handleChangeImage = (imageUrl: string) => {
    setDisplayImage(imageUrl);
  };

  return (
    <div className="fle flex-col">
      <div className="flex h-[380px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={displayImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] "
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      {/* BOTOES COM AS OUTRAS IMAGENS */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            onClick={() => handleChangeImage(imageUrl)}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              imageUrl === displayImage &&
              "border-2 border-solid border-primary"
            } `}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
