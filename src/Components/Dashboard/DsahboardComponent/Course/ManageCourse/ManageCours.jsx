import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Provider/AuthProvider";

const ManageCourse = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext) || {};
  const email = user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/createCourse/");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data");
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  if (loading) {
    return <p>Loading...</p>; // You can render a loading spinner or message
  }

  if (error) {
    return <p>Error: {error}</p>; // You can render an error message
  }

  const classData = userData.filter(
    ({ instructorEmail }) => instructorEmail === email
  );
  console.log(userData);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
      {classData.map((data) => (
        <div key={data._id} className="border md:w-[400px] rounded-xl">
          <img className="h-60  rounded-t-xl" src={data.image} alt="" />
          <div className="p-4">
            <h1 className="text-2xl font-bold">{data?.courseName}</h1>
            <div className="md:flex justify-between my-4 text-xl">
              <p>Course duration {data?.courseDuration} Month</p>
              <p>{data?.category}</p>
            </div>
            <p>Enrolled student :{data?.enrolled || 0}</p>

            <Link
              to={`/dashboard/manageCourse/${data?._id}`}
              className=" text-xl"
            >
              <button className="mt-10 w-full">Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageCourse;
