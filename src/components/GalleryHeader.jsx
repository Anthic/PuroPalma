import React from "react";

const GalleryHeader = () => {
  return (
    <section className="bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-360 mx-auto text-center">
        {/* Main Title - Screenshot onujayi bold and large */}
        <h1 className="text-3xl md:text-7xl lg:text-[110px] font-bold tracking-tighter leading-none mb-6">
          The Essence of PuroPalma
        </h1>

        {/* Subtitle - Curated details text */}
        <p className="text-gray-100 text-sm md:text-lg lg:text-md font-light tracking-wide max-w-2xl mx-auto opacity-90">
          Explore the curated details and serene spaces of PuroPalma through our
          lens.
        </p>
      </div>
    </section>
  );
};

export default GalleryHeader;
