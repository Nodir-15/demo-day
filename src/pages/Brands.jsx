import React from 'react';

const brands = [
  { name: 'Versace', logo: '/Group.svg', url: 'https://www.versace.com/us/en/' },
  { name: 'Zara', logo: '/zlg.svg', url: 'https://www.zara.com/us/' },
  { name: 'Gucci', logo: '/gcc.svg', url: 'https://www.gucci.com/us/en/' },
  { name: 'Prada', logo: '/plg.svg', url: 'https://www.prada.com/us/en.html' },
  { name: 'Calvin Klein', logo: '/clkl.svg', url: 'https://www.calvinklein.us/en' },
  { name: 'Nike', logo: '/nk.png', url: 'https://www.nike.com/' },
  { name: 'Adidas', logo: '/a.png', url: 'https://www.adidas.com/us' },
  { name: 'Puma', logo: '/pl.jpg', url: 'https://us.puma.com/us/en' },
];

const Brands = () => {
  return (
    <main className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white text-center mb-4">OUR BRANDS</h1>
        <p className="text-xl text-gray-300 text-center mb-16">Shop directly from the official stores of the world's top brands</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
  {brands.map(brand => (
    <a
      key={brand.name}
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center p-10 bg-gray-900 rounded-2xl hover:bg-gray-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <img 
        src={brand.logo} 
        alt={brand.name} 
        className="max-h-24 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
    </a>
  ))}
</div>
      </div>
    </main>
  );
};

export default Brands;