
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import '@smastrom/react-rating/style.css';
import { AuthContext } from "../../../Provider/AuthProvider";
import Container from "../../Shared/Container/Container";

// const single_class = [
//     {
//         name:"class 1 about html css"
//     }
// ]
const SingleClasses = () => {
  const { user } = useContext(AuthContext) || {};
  const email = user?.email;

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://creative-zone-learners-servers.vercel.app/createCourse/");
        setCourses(response.data);
        setFilterData(response.data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
        setError("Error fetching courses data");
      } finally {
        setLoading(false);
      }
    };

    if (email || !email) {
      fetchData();
    }
  }, [email]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const categories = [...new Set(courses.map(course => course.category))];

  const handleFiltering = (category) => {
    const filteredData = category === "All"
      ? courses
      : courses.filter(({ category: courseCategory }) => courseCategory === category);
    setFilterData(filteredData);
  };

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-4xl font-bold text-orange-600">Our Courses</h1>


        <section >
          {filterData.map((course) => (
            <div className="rounded-xl shadow-md w-full sm:w-full md:w-[400px] lg:w-[400px] xl:w-[400px] border-2" key={course._id}>
              
              
            </div>
          ))}
        </section>

        <section >
            <ul>
            {categories.map((category, i) => (
            <Link to="" className="shadow-xl px-10 py-14" key={i} onClick={() => handleFiltering(category)}><li key={category._id}>{category}</li>
             
            </Link>
          ))}   
            </ul>
          
        </section>
      </div>
    </Container>
  );
};

export default SingleClasses;
