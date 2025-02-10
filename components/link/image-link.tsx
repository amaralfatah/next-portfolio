import {BaseLink} from "@/components/link/base-link";
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
        <span className="flex items-center gap-1 text-muted-foreground">
          {type} <span className="h-2 w-2 rounded-full bg-current"/> ${price}
        </span>
      </div>
    </BaseLink>
  );
}
