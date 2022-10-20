import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryNews from "../Shared/CategoryNews";

const Category = () => {
  const allNews = useLoaderData();
  return (
    <div>
      {allNews.map((news) => (
          <CategoryNews
              key={news._id}
              news={news}
          ></CategoryNews>
      ))}
    </div>
  );
};

export default Category;
