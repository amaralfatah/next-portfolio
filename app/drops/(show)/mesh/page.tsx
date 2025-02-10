"use client"

import React, {useState} from 'react';
import {ArrowLeft, ArrowRight} from 'lucide-react';

const ProductDetails = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/logo-light.png',
        '/images/logo-light.png',
        '/images/logo-light.png',
    ];


    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Image Carousel */}
            <div className="relative w-full" role="region" aria-roledescription="carousel">
                <div className="overflow-hidden rounded-2xl">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{transform: `translateX(-${currentSlide * 100}%)`}}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                            >
                                <img
                                    src={slide}
                                    alt={`Creatorpreneur - Slide ${index + 1}`}
                                    className="w-full h-auto"
                                    width={600}
                                    height={337.5}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-4 flex">
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="mx-2 bg-accent hover:bg-muted w-12 h-12 rounded-md border border-input flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4"/>
                        <span className="sr-only">Previous slide</span>
                    </button>
                    <button
                        type="button"
                        onClick={nextSlide}
                        className="mx-2 bg-accent hover:bg-muted w-12 h-12 rounded-md border border-input flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowRight className="h-4 w-4"/>
                        <span className="sr-only">Next slide</span>
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-4">
                <div>
                    <div className="flex flex-col gap-3">
                        <a href="/drops"
                           className="flex items-center group gap-1 no-underline text-muted-foreground hover:text-foreground">
                <span className="group-hover:-translate-x-1 transition-transform">
                  <ArrowLeft className="w-4 h-4"/>
                </span>
                            Back
                        </a>
                        <h1 className="text-4xl font-medium text-foreground">
                            Creatorpreneur - Creator Framer Template
                        </h1>
                        <span className="text-xl text-foreground">$39</span>
                        <span className="w-fit rounded-md bg-accent px-4 py-2 text-foreground">
                Framer Template
              </span>
                    </div>

                    <div className="container flex flex-col gap-4 py-4 text-foreground">
                        <p>Creatorpreneur is the ultimate Framer Template for creators.</p>
                        <p>Benefits:</p>
                        <ul className="list-disc pl-5">
                            <li>Easily sell digital products with LemonSqueezy</li>
                            <li>Write beautiful newsletters/blogs</li>
                            <li>Quickly create a custom Linktree page for your socials</li>
                            <li>High-speed performance (97 lighthouse score)</li>
                        </ul>
                        <p>
                            If you have any questions, please send an email to{' '}
                            <a href="mailto:cole@caccamise.com" className="text-primary hover:underline">
                                cole@caccamise.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                    <a href="https://store.websignr.com/buy/2b0bc309-1646-4a46-80a5-6746bdeeb49f">
                        <button
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md font-medium">
                            Buy Now
                        </button>
                    </a>
                    <a href="https://creatorpreneur.framer.website/" target="_blank" rel="noopener noreferrer">
                        <button
                            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-2 rounded-md font-medium">
                            Live Demo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;