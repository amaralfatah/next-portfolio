import React from 'react';
import {Circle} from 'lucide-react';

const DropsPage = () => {
    const products = [
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

    return (
        <div className="flex flex-col gap-16">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-medium text-foreground">Drops</h1>
                <p className="text-foreground">Premium digital products I've created.</p>
            </div>

            {/* Products List */}
            <div className="flex flex-col gap-4">
                <span className="font-medium text-foreground">All drops</span>
                <div className="flex flex-col">
                    {products.map((product) => (
                        <a
                            key={product.id}
                            href={`/drops/${product.id}`}
                            className="flex py-6 gap-4 items-center no-underline hover:bg-accent transition-all duration-200 rounded-md hover:border-input hover:px-3 hover:-mx-3"
                        >
                            <div className="h-16 w-16 overflow-hidden">
                                <img
                                    alt={product.title}
                                    src={product.image}
                                    className="h-full rounded-lg object-cover"
                                    width={512}
                                    height={512}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-foreground">{product.title}</span>
                                <span className="font-regular flex items-center gap-1 text-muted-foreground">
                    {product.type}{' '}
                                    <Circle className="w-2 h-2"/>{' '}
                                    ${product.price}
                  </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Affiliate Link */}
            <span className="text-sm text-muted-foreground">
          Have an audience who'd love my products?{' '}
                <a
                    href="https://colecaccamise.lemonsqueezy.com/affiliates"
                    className="text-primary hover:opacity-90"
                >
            Become an affiliate
          </a>
          .
        </span>
        </div>
    );
};

export default DropsPage;