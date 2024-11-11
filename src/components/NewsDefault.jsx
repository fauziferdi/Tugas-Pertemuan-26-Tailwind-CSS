import React from "react";

const NewsDefault = ({ content, date, img }) => {
  const truncateText = (text, maxChars) => {
    if (text.length > maxChars) {
      return text.slice(0, maxChars) + "...";
    }
    return text;
  };
  return (
    <a href="#" className="bg-white block hover:text-blue-500">
      <img
        src={img}
        alt=""
        loading="lazy"
        className="w-full object-cover rounded-lg brightness-75"
      />
      <div className="p-4">
        <p className="text-md font-medium">{truncateText(content, 67)}</p>
        <p className="text-gray-500 text-sm mt-2">{date}</p>
      </div>
    </a>
  );
};

export default NewsDefault;
