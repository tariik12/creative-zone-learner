import React from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { paginate } from "../../../Shared/Pagination/Paginate";

const PopularCoursesCard = ({ data, currentPage, pageSize }) => {
  const paginatePosts = paginate(data, currentPage, pageSize);

  const handleAddCard = (cor) => {
    cor.fevEmail = email;
    axios
      .post("https://creative-zone-learners-servers.vercel.app/fevCourse", cor)
      .then((res) => {
      });
  };

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {paginatePosts.map((course) => (
          <div
            className="rounded-xl shadow-md w-full lg:max-w-[400px]  border-2"
            key={course._id}
          >
            <img
              className="w-full h-72 rounded-t-2xl"
              src={course?.image}
              alt=""
            />
            <div className="p-4">
              <h2 className="text-orange-600 text-lg font-bold">All Courses</h2>
              <h2 className="my-3 text-2xl font-bold">{course?.name}</h2>
              <div className="flex gap-2">
                <Rating
                  style={{ maxWidth: 70 }}
                  value={course?.ratings}
                  readOnly
                />
                <p>{course.student} Students</p>
              </div>

              <div className="my-4 flex justify-between items-center">
                <p className="text-xl text-gray-600 font-bold">
                  Course Fee {course?.courseFee}
                </p>
              </div>
              <div className=" flex justify-center items-center gap-4">
                <button onClick={() => handleAddCard(course)}>Add Card</button>
                <Link to={`/our-courses/${course._id}`}>
                  <button>Course Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PopularCoursesCard;
