import React from 'react';

interface Category {
  id: number;
  name: string;
  description: string;
  images: string[];
  link: string;
}

interface CardLayoutProps {
  category: Category;
}

const MenusSection: React.FC = () => {
  const menuCategories: Category[] = [
    {
      id: 1,
      name: 'BRUNCH',
      description:
        'Weekend indulgence with Italian flair. Fresh pastries, frittatas, and signature breakfast spuntini.',
      images: [
        '/assets/menus/brunch/1.jpg',
        '/assets/menus/brunch/2.jpg',
        '/assets/menus/brunch/1.jpg',
      ],
      link: '/menu/brunch',
    },
    {
      id: 2,
      name: 'LUNCH',
      description:
        'Midday classics featuring fresh insalata, crispy focaccia, and our famous spuntini selection.',
      images: [
        '/assets/menus/lunch/1.jpg',
        '/assets/menus/lunch/2.jpg',
        '/assets/menus/lunch/1.jpg',
      ],
      link: '/menu/lunch',
    },
    {
      id: 3,
      name: 'DINNER',
      description:
        'Evening elegance with octopus, caprese, and our full range of Italian culinary treasures.',
      images: [
        '/assets/menus/dinner/1.jpg',
        '/assets/menus/dinner/2.jpg',
        '/assets/menus/dinner/3.jpg',
      ],
      link: '/menu/dinner',
    },
    {
      id: 4,
      name: 'BAR',
      description:
        'Signature cocktails, sparkling spritz, and our special Spuntino 75 with Italian wines.',
      images: [
        '/assets/menus/bar/1.jpg',
        '/assets/menus/bar/2.jpg',
        '/assets/menus/bar/3.jpg',
        '/assets/menus/bar/4.jpg',
        '/assets/menus/bar/5.jpg',
      ],
      link: '/menu/bar',
    },
  ];

  const handleMenuClick = () => {
    window.open(
      'https://www.ujamaaresort.org/wp-content/uploads/2018/01/Ujamaa-restaurant-menu.pdf',
      '_blank',
    );
  };

  // Card 1: 1:1 image + text + 9:16 image (3 columns)
  const Card1Layout: React.FC<CardLayoutProps> = ({ category }) => (
    <div className="w-full bg-amber-50 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1 overflow-hidden group">
      {/* Left 1:1 Image - Full width on mobile, then responsive */}
      <div className="aspect-square h-full overflow-hidden relative md:col-span-1 lg:col-span-2">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[0]})`,
          }}
        />
      </div>

      {/* Middle Text Section - Full width on mobile, then responsive */}
      <div className="bg-amber-50 z-10 w-full flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 md:col-span-1 lg:col-span-3 aspect-square md:aspect-auto">
        <h3 className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90">
          Big Spuntino
        </h3>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center">
          {category.name}
        </h2>
        <p className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2">
          {category.description}
        </p>
        <button
          onClick={handleMenuClick}
          className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
        >
          <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
            View Menu
          </div>
          <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
            View Menu
          </div>
        </button>
      </div>

      {/* Right 9:16 Image - Hidden on mobile, then responsive */}
      <div className="hidden h-full md:block overflow-hidden relative md:col-span-1 lg:col-span-1 aspect-square md:aspect-[9/16]">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[1]})`,
          }}
        />
      </div>
    </div>
  );

  // Card 2: Two 9/16 images + one 1/1 text (3 columns)
  const Card2Layout: React.FC<CardLayoutProps> = ({ category }) => (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-1 bg-amber-50 overflow-hidden group">
      {/* First 9/16 Image - Full width on mobile */}
      <div className="aspect-square overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[0]})`,
          }}
        />
      </div>

      {/* Second 9/16 Image - Hidden on mobile */}
      <div className="hidden md:block aspect-square overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[1]})`,
          }}
        />
      </div>

      {/* Text Section (1/1) - Full width on mobile */}
      <div className="bg-amber-50 z-10 w-full flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 aspect-square">
        <h3 className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90">
          Big Spuntino
        </h3>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center">
          {category.name}
        </h2>
        <p className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2">
          {category.description}
        </p>
        <button
          onClick={handleMenuClick}
          className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
        >
          <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
            View Menu
          </div>
          <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
            View Menu
          </div>
        </button>
      </div>
    </div>
  );

  // Card 3: Image + Text + Image (3 columns)
  const Card3Layout: React.FC<CardLayoutProps> = ({ category }) => (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-amber-50 gap-1 overflow-hidden group">
      {/* Left Image - Full width on mobile */}
      <div className="aspect-square overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[0]})`,
          }}
        />
      </div>

      {/* Middle Text Section - Full width on mobile */}
      <div className="bg-amber-50 flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 aspect-square">
        <h3 className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90">
          Big Spuntino
        </h3>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center">
          {category.name}
        </h2>
        <p className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2">
          {category.description}
        </p>
        <button
          onClick={handleMenuClick}
          className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
        >
          <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
            View Menu
          </div>
          <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
            View Menu
          </div>
        </button>
      </div>

      {/* Right Image - Hidden on mobile */}
      <div className="hidden md:block aspect-square overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[1]})`,
          }}
        />
      </div>
    </div>
  );

  const Card4Layout: React.FC<CardLayoutProps> = ({ category }) => (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-1 bg-amber-50 overflow-hidden group">
      {/* First Image - Full width on mobile */}
      <div className="aspect-square overflow-hidden relative md:col-span-1">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[0]})`,
          }}
        />
      </div>

      {/* Text Section - Full width on mobile */}
      <div className="bg-amber-50 flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 aspect-square md:col-span-2 lg:col-span-2">
        <h3 className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90">
          Big Spuntino
        </h3>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center">
          {category.name}
        </h2>
        <p className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2">
          {category.description}
        </p>
        <button
          onClick={handleMenuClick}
          className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
        >
          <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
            View Menu
          </div>
          <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
            View Menu
          </div>
        </button>
      </div>

      {/* Remaining Images - Hidden on mobile, shown on larger screens */}
      <div className="hidden md:block overflow-hidden relative aspect-[9/16]">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[1]})`,
          }}
        />
      </div>
      <div className="hidden lg:block overflow-hidden relative aspect-[9/16]">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[2]})`,
          }}
        />
      </div>
      <div className="hidden lg:block overflow-hidden relative aspect-[9/16]">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.images[3]})`,
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="mb-12 md:mb-24 lg:mb-32">
        <h2 className="text-3xl md:text-6xl lg:text-7xl uppercase font-bold w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-tight">
          A Tavola
        </h2>
        <p className="text-center font-narrow pt-4 md:pt-6 w-full md:w-4/5 lg:w-3/5 mx-auto text-sm md:text-lg leading-relaxed px-4">
          The menu at Big Spuntino is a warm tribute to Italy&apos;s culinary heritage. From
          insalata, caprese and octopus to the crispiest foccacia, our menu offers an exquisite
          selection of classic spuntini (*ital. &quot;snacks&quot;). Of course, this also applies to
          the dolci: from the traditional crème the mascarpone to the fluffy light maritozzi, the
          Big Spuntino sweetens everyday life with the churros all italiana – Neapolitan doughnut
          sticks, served warm and perfect for dipping in melted chocolate with special toppings.
        </p>
      </div>

      <div className="pt-8 md:pt-12 lg:pt-16 mx-auto space-y-2 md:space-y-4 lg:space-y-6">
        <Card1Layout category={menuCategories[0]} />
        <Card2Layout category={menuCategories[1]} />
        <Card3Layout category={menuCategories[2]} />
        <Card4Layout category={menuCategories[3]} />
      </div>

      <div className="pt-12 md:pt-24 lg:pt-32 text-center">
        <div className="max-w-2xl mx-auto mb-6 md:mb-8 px-4">
          <h3 className="text-2xl md:text-5xl lg:text-6xl uppercase font-bold mb-4 md:mb-6">
            Experience Big Spuntino
          </h3>
          <p className="text-sm md:text-lg font-narrow leading-tight">
            From morning cappuccino to evening aperitivo, every moment at Big Spuntino celebrates
            the Italian way of life. Our warm atmosphere and authentic flavors create the perfect
            setting for sharing good food and great company.
          </p>
        </div>
        <button
          onClick={handleMenuClick}
          className="group relative inline-flex cursor-pointer h-12 md:h-14 lg:h-16 items-center justify-center overflow-hidden rounded-none font-medium"
        >
          <div className="inline-flex h-12 md:h-14 lg:h-16 translate-y-0 items-center justify-center bg-amber-300 text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 text-black transition group-hover:-translate-y-[150%] rounded-none">
            View Full Menu (PDF)
          </div>
          <div className="absolute inline-flex h-12 md:h-14 lg:h-16 w-full translate-y-[100%] items-center justify-center text-lg md:text-xl lg:text-2xl bg-black px-6 md:px-8 lg:px-10 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
            View Full Menu (PDF)
          </div>
        </button>
      </div>
    </section>
  );
};

export default MenusSection;
