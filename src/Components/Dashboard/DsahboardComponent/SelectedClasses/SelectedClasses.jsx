import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
const SelectedClasses = () => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext) || {};
    const email = user?.email;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get("https://creative-zone-learners-servers.vercel.app/fevCourse");
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
    console.log(userData)
    const filterData = userData.filter(({fevEmail}) =>fevEmail ===email)
    return (
        <div className='grid grid-cols-2 mx-auto gap-4'>
           {filterData.map((course) => (
            <div className="rounded-xl shadow-md w-full sm:w-full md:w-[400px] lg:w-[400px] xl:w-[400px] border-2" key={course._id}>
              <img className="w-full h-72 rounded-t-2xl" src={course?.image} alt="" />
              <div className="p-4">
                <h2 className="text-orange-600 text-lg font-bold">All Courses</h2>
                <h2 className="my-3 text-2xl font-bold">{course?.name}</h2>
                <div className="flex gap-2">
                  <Rating style={{ maxWidth: 70 }} value={course?.ratings} readOnly />
                  <p>{course.student} Students</p>
                </div>

                <div className="my-4 flex justify-between items-center">
                  <p className="text-xl text-gray-600 font-bold">Course Fee {course?.courseFee}</p>
                  
                </div>
                <div className=" flex justify-center items-center gap-4">
                <button >Admission</button>
                  <Link to={`/our-courses/${course._id}`}>
  <button>Course Details</button>
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    );
};

export default SelectedClasses;