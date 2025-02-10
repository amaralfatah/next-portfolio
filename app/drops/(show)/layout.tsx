"use client"

import {ArrowRight, Circle} from 'lucide-react';
import {useState} from "react";

export default function DropsLayout({

                                        children,
                                    }: {
    children: React.ReactNode
}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/logo-light.png',
        '/images/logo-light.png',
        '/images/logo-light.png',
    ];

    const relatedProducts = [
        {
            id: 'mesh',
            title: 'Dark Mesh Wallpapers',
            type: 'Wallpapers',
            price: 9,
            image: '/images/logo-light.png'
        },
        {
            id: 'wave',
            title: 'Wave Wallpapers',
            type: 'Wallpapers',
            price: 9,
            image: '/images/logo-light.png'
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
                {children}
            </div>

            {/* Related Products */}
            <div className="flex flex-col gap-2">
                <span className="text-2xl font-medium text-foreground">You may also like</span>
                <div className="flex flex-col gap-4">
                    {relatedProducts.map((product) => (
                        <a
                            key={product.id}
                            href={`/drops/${product.id}`}
                            className="flex py-6 gap-4 items-center no-underline hover:bg-accent transition-all duration-200 rounded-md hover:border-input hover:px-3 hover:-mx-3"
                        >
                            <div className="h-16 w-16 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full rounded-lg object-cover"
                                    width={512}
                                    height={512}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-foreground">{product.title}</span>
                                <span className="font-regular flex items-center gap-1 text-muted-foreground">
                  {product.type} <Circle className="w-2 h-2"/> ${product.price}
                </span>
                            </div>
                        </a>
                    ))}

                    <a
                        href="/drops"
                        className="group flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
                    >
                        View all
                        <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4"/>
            </span>
                    </a>
                </div>
            </div>
        </div>
    )
}