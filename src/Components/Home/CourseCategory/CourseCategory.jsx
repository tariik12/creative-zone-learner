import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Container from "../../Shared/Container/Container";
import img from "../../../assets/courses/singlecourse/img4.png";

const CourseCategory = () => {
  
  //
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

  //   console.log(categories);

  const handleGetCategory = (id) => {
    console.log(id);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 mx-10 md:mx-2 md:grid-cols-3 lg:grid-cols-5 justify-evenly my-20 gap-5 md:gap-20">
        {categories?.map((d, i) => (
          <div
            onClick={() => handleGetCategory(d)}
            key={i}
            className="text-center border shadow-2xl p-5 hover:border-orange-700 cursor-pointer rounded-xl"
          >
            <div className="flex justify-center my-3 w-10 h-10 mx-auto">
              <img src={img} alt="" />
            </div>
            <h2 className="text-xl font-semibold">{d}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CourseCategory;
