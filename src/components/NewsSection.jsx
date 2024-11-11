import React from "react";
import NewsDefault from "./NewsDefault";
import MenuLine from "./MenuLine";

const NewsSection = ({ judul, newsData, menuPlus }) => (
  <>
    <MenuLine judul={judul} menuPlus={menuPlus} />
    <div className="grid grid-cols-3 gap-4 ">
      {newsData.map((news, index) => (
        <NewsDefault
          key={index}
          content={news.content}
          date={news.date}
          img={news.img}
        />
      ))}
    </div>
  </>
);

export default NewsSection;
