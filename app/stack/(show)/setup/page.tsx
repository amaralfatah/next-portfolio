import React from 'react';
import {ExternalLink} from 'lucide-react';

const SetupPage = () => {
  const setupItems = {
    "Desk": [
      {
        title: "Adjustable Laptop Stand",
        description: "Portable aluminum laptop stand with 6 adjustable height levels. Foldable and lightweight design makes it perfect for both home and travel use.",
        price: "Rp 35.000",
        buyFrom: "Shopee",
        link: "https://shopee.co.id/Laptop-Stand-Holder-Aluminium-Portable-Lipat-Riser-Foldable-Adjustable-Height-6-Level-Ketinggian-Stand-Holder-Dudukan-Laptop-Bahan-Alumunium-Foldable-Adjustable-Portable-Dudukan-Laptop-Foldable-Laptop-Stand-Tablet-Stand-Holder-Lipat-Notebook-Stand-Ori-i.401400784.25416242896"
      },
      {
        title: "Metal Phone Stand",
        description: "Full metal construction phone and tablet holder. Strong and stable design perfect for desk use. Adjustable viewing angles for video calls.",
        price: "Rp 10.000",
        buyFrom: "Shopee",
        link: "https://shopee.co.id/-BlackHorse-Desktop-Stand-flull-metal-holder-Phone-Holder-Stand-Besi-Tablet-Holder-Stand-Bahan-FULL-metal-i.1258794925.29158042255"
      },
      {
        title: "Cable Management Pouch",
        description: "Two-layer travel organizer for cables and gadget accessories. Perfect for home storage or travel.",
        price: "Rp 10.000",
        buyFrom: "Shopee",
        link: "https://shopee.co.id/HM84-Cable-Pouch-Travel-Digital-Pouch-Bag-Tas-Kabel-Travel-Gadget-Organizer-2-Layer-Multifungsi-i.275983622.19184785398"
      }
    ],
    "Audio": [
      {
        title: "EarFun Wave Pro Headphones",
        description: "High-quality wireless headphones with Hi-Res LDAC and hybrid active noise cancellation. Perfect for work and music.",
        price: "Rp 838.000",
        buyFrom: "Shopee",
        link: "https://shopee.co.id/EarFun-Wave-Pro-Black-Hi-Res-LDAC-Wireless-Headphones-with-Premium-Hybrid-ANC-i.377464282.27501674934"
      },
      {
        title: "QKZ AK6 Pro Earphones",
        description: "Budget-friendly wired earphones with detachable cable design and comfortable fit. Great alternative to KZ EDX Pro.",
        price: "Rp 53.000",
        buyFrom: "Shopee",
        link: "https://shopee.co.id/QKZ-AK6-Pro-Detachable-Cable-Sport-Earphone-with-Mic-alt-kz-edx-pro-i.359528249.14035897571"
      }
    ],
    "Device": [
      {
        title: "MacBook Pro 2019 (i5)",
        description: "13-inch MacBook Pro with Intel i5 processor. Perfect for programming and design work.",
        price: "Rp 7.500.000",
        buyFrom: "Asvari Laptop Jogja",
        link: "https://support.apple.com/id-id/111997",
      }
    ]
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <h1 className="text-4xl font-medium text-foreground">My Setup</h1>
        <span className="text-muted-foreground">A collection of items I use daily.</span>
        <span className="text-sm text-muted-foreground">Note: I may earn a commission from some links (thank you for supporting me).</span>
      </div>

      {/* Main Content */}
      <div className="container flex flex-col gap-6 py-4">
        {Object.entries(setupItems).map(([category, items]) => (
          <section key={category} className="space-y-4">
            <h2 className="text-xl font-medium text-foreground capitalize">{category}</h2>
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.title} className="group space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    {item.link && (
                      <ExternalLink
                        className="w-4 h-4 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"/>
                    )}
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-medium">{item.price}</span>
                    <span className="text-muted-foreground">{item.buyFrom}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Feedback Form */}
      <form className="py-8">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-medium text-foreground">Suggestions?</span>
          <textarea
            placeholder="Share your thoughts..."
            className="min-h-32 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetupPage;
