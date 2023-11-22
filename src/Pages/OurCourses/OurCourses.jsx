import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Shared/Container/Container";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import "@smastrom/react-rating/style.css";
import CourseCategory from "../../Components/Shared/CourseCategory/CourseCategory";

const OurCourses = () => {
  const { user } = useContext(AuthContext) || {};
  const email = user?.email;

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState([]);

  const handleAddCard = (cor) => {
    cor.fevEmail = email;
    console.log(cor);
    axios
      .post("https://creative-zone-learners-servers.vercel.app/fevCourse", cor)
      .then((res) => {
        console.log(res.data);
        alert("done");
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://creative-zone-learners-servers.vercel.app/createCourse/"
        );
        setCourses(response.data);
        setFilterData(response.data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
        setError("Error fetching courses data");
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const categories = [...new Set(courses.map((course) => course.category))];

  const handleFiltering = (category) => {
    const filteredData =
      category === "All"
        ? courses
        : courses.filter(
            ({ category: courseCategory }) => courseCategory === category
          );
    setFilterData(filteredData);
  };

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-4xl font-bold text-orange-600">Our Courses</h1>

        {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-10 justify-center">
          <Link to="" className="shadow-xl px-10 py-14" onClick={() => handleFiltering("All")}>
            <div className="flex justify-center">
              <span className="text-4xl">🌟</span>
            </div>
            <h2 className="text-2xl mt-4 text-center">All</h2>
          </Link>
          {categories.map((category, i) => (
            <Link to="" className="shadow-xl px-10 py-14" key={i} onClick={() => handleFiltering(category)}>
              <div className="flex justify-center">
                <span className="text-4xl">🌟</span>
              </div>
              <h2 className="text-2xl mt-4 text-center">{category}</h2>
            </Link>
          ))}
        </section> */}

        <CourseCategory categories={categories} handleFiltering={handleFiltering}/>

        <h2 className="text-center text-4xl font-bold mt-20">
          Are you ready to admit
        </h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-20">
          {filterData.map((course) => (
            <div
              className="rounded-xl shadow-md w-full sm:w-full md:w-[400px] lg:w-[400px] xl:w-[400px] border-2"
              key={course._id}
            >
              <img
                className="w-full h-72 rounded-t-2xl"
                src={course?.image}
                alt=""
              />
              <div className="p-4">
                <h2 className="text-orange-600 text-lg font-bold">
                  All Courses
                </h2>
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
                  <button onClick={() => handleAddCard(course)}>
                    Add Card
                  </button>
                  <Link to={`/our-courses/${course._id}`}>
                    <button>Course Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Container>
  );
};

export default OurCourses;
