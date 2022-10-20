import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="border p-2 rounded shadow">
      <h3 className="fs-5 text-center">Categories</h3>
      {categories.map((category) => (
        <div key={category.id}>
          <Link className="text-decoration-none" to={`/category/${category.id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
