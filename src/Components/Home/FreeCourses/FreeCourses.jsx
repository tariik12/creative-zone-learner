import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../Shared/Container/Container";
import { Link } from "react-router-dom";

const FreeCourses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://creative-zone-learners-servers.vercel.app/createCourse/"
        );
        const res_data = response?.data;
        const filterd = res_data.filter((item) => item.courseFee ==   "0" || 0 || "");
        setData(filterd);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      } finally {
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center">Free Courses</h2>
        {data.length ? (
          <div>
            {data?.map((d, idx) => (
              <div
                key={idx}
                className="w-[400px] border-2 rounded-2xl shadow-xl"
              >
                <img
                  className="w-full h-[300px] rounded-t-xl"
                  src={d?.image}
                  alt={d?.courseName}
                />
                <h2 className="my-2 text-xl p-3">{d?.courseName}</h2>
                <Link to={`/our-courses/${d?._id}`} className="">
                  <button className="w-full">Details</button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-center my-5">There is no data available</h2>
        )}
      </div>
    </Container>
  );
};

export default FreeCourses;
