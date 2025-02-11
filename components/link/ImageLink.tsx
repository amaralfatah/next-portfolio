import {BaseLink} from "@/components/link/BaseLink";
import React from "react";
import Image from "next/image";

interface ImageLinkProps {
  title: string;
  type: string;
  price: number;
  image: string;
  url: string;
}

export function ImageLink({title, type, price, image, url}: ImageLinkProps) {

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  return (
    <BaseLink href={url}>
      <div className="h-16 w-16 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={512}
          height={512}
          className="h-full rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span>{title}</span>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium">
            {type}
          </span>
          <span className="h-1 w-1 rounded-full bg-current"/>
          <span className="font-medium">
            Rp{formatNumber(price)}
          </span>
        </div>
      </div>
    </BaseLink>
  );
}
