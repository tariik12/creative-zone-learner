import React from "react";
import { Link } from "react-router-dom";

const CourseCategory = ({categories,handleFiltering}) => {
  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-10 justify-center">
        <Link
          to=""
          className="shadow-xl px-10 py-14"
          onClick={() => handleFiltering("All")}
        >
          <div className="flex justify-center">
            <span className="text-4xl">🌟</span>
          </div>
          <h2 className="text-2xl mt-4 text-center">All</h2>
        </Link>
        {categories.map((category, i) => (
          <Link
            to=""
            className="shadow-xl px-10 py-14"
            key={i}
            onClick={() => handleFiltering(category)}
          >
            <div className="flex justify-center">
              <span className="text-4xl">🌟</span>
            </div>
            <h2 className="text-2xl mt-4 text-center">{category}</h2>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CourseCategory;
