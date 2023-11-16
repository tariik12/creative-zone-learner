import React from "react";
import Container from "../../Components/Shared/Container/Container";
import { courses } from "../../@fake-db/db";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

const OurCourses = () => {
  const data = courses;
  return (
    <Container>
      <div className="my-10">
        <h1 className="text-4xl font-bold text-orange-600">Our Courses</h1>
        <p className="my-7 w-[80%] text-gray-700 text-lg">
          We offer all the trendy courses that are in demand in the global
          market. In addition, you are getting lab facilities where high-end
          computers with the required configuration are ready to facilitate your
          learning. After class, you can practice the topic in our labs to grow
          your skills. The courses are designed to make you confident throughout
          the learning journey with Creative Zone learner.
        </p>

        {/* all course divided by department */}

        <section className="grid grid-cols-3 gap-20 my-10 justify-center">
          {data?.map((d, i) => (
            <Link to="" className="shadow-xl px-10 py-14" key={i}>
              <div className="flex justify-center">
                <img className="w-10" src={d?.icon} alt="" />
              </div>
              <h2 className="text-2xl mt-4 text-center">{d?.department}</h2>
            </Link>
          ))}
        </section>

        {/* displa all courses here */}

        <h2 className="text-center text-4xl font-bold mt-20">
          Are you ready to admit
        </h2>
        <p className="text-center w-[70%] text-lg my-4 mx-auto">
          We have designed our course list with the demanding skills in the
          local and global market. From the list, you can pick any online or
          offline course according to your preference.
        </p>

        <section className="grid grid-cols-3 gap-20 mt-20">
          {data?.map((d) =>
            d.courses.map((d, i) => (
              <div className="rounded-xl shadow-md w-[400px] border-2" key={i}>
                <img className="w-full h-72 rounded-t-2xl" src={d?.img} alt="" />
                <div className="p-4">
                  <h2 className="text-orange-600 text-lg font-bold">All Courses</h2>
                  <h2 className="my-3 text-2xl font-bold">{d?.name}</h2>
                  <div className="flex gap-2">
                  <Rating style={{ maxWidth: 70 }} value={d?.ratings} readOnly />
                    <p>{d.student} Students</p>
                  </div>

                  <div className="my-4 flex justify-between items-center">
                    <p className="text-xl text-gray-600 font-bold">Course Fee {d?.courseFee}</p>
                    <button>Get Admit</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </Container>
  );
};

export default OurCourses;
