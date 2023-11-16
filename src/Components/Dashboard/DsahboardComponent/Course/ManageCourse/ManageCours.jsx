import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../../Provider/AuthProvider';

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

  const classData = userData.filter(({instructorEmail}) =>instructorEmail ===email)
  console.log(userData)
    return (
        <div>
            {
                classData.map(data =>
                
                <div key={data._id}>

<h1>{data.courseName}</h1>
<p></p>
<img src={data.image} alt="" />
                </div>)
            }
        </div>
    );
};

export default ManageCourse;