import React from "react";

const GalleryHeader = ({ content, date, img }) => {
  return (
    <a href="#" className="h-full w-full block">
      <div className="h-full w-full relative overflow-hidden bg-cover bg-no-repeat">
        <img
          src={img}
          alt="Gambar"
          loading="lazy"
          className="w-full h-full object-cover brightness-75 transition duration-300 ease-in-out hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-white text-lg font-bold">{content}</p>
          <p className="text-white text-sm">{date}</p>
        </div>
      </div>
    </a>
  );
};

export default GalleryHeader;
