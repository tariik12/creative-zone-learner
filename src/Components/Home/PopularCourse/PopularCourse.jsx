import React, { useContext, useEffect, useState } from "react";
import Container from "../../Shared/Container/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import PopularCoursesCard from "./PopularCoursesCard/PopularCoursesCard";
import Pagination from "../../Shared/Pagination/Pagination";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PopularCourse = () => {
  const { user } = useContext(AuthContext) || {};
  const email = user?.email;

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

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

  // const categories = [...new Set(courses.map((course) => course.category))];

  // console.log(categories);

  //   "Web & software"
  // 1
  // :
  // "Robotics & Automation"
  // 2
  // :
  // "Digital marketing"
  // 3
  // :
  // "3D animation"
  // 4
  // :
  // "Cyber Security"

  // filter by category
  // const webAndSoft = courses?.filter(
  //   (item) => item.category == "Web & software"
  // );
  // const roboticsAndAutomation = courses?.filter(
  //   (item) => item.category == "Robotics & Automation"
  // );
  // const digitalMarketing = courses?.filter(
  //   (item) => item.category == "Digital marketing"
  // );
  // const animation = courses?.filter((item) => item.category == "3D animation");
  // const cyberSecurity = courses?.filter(
  //   (item) => item.category == "Cyber Security"
  // );
  // console.log(cyberSecurity);

  const categorizedData = {
    "View all": [...courses], // Create a "View all" category with a copy of all data
  };
  courses.forEach((item) => {
    const { category, ...rest } = item;
    if (!categorizedData[category]) {
      categorizedData[category] = [];
    }
    categorizedData[category].push(rest);
  });

  let categories = categorizedData;

  console.log(categories);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <div className="bg-[#FAF9FD] p-14 my-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-center">Popular Courses</h2>
        <p className="my-3 w-1/2 mx-auto text-center">
          We have designed our courses with the most demanding professional
          skills. The knowledge, experience, and expertise gained through the
          program will ensure your desired job in the global market. From the
          list below you can enroll to any online or offline courses at any
          time.
        </p>

        <Tabs className=" mx-auto">
          <TabList className="flex flex-col md:flex-row sm:justify-center md:justify-between items-center tabContaner dark:bg-[#10223F] ">
            {Object.keys(categories).map((category, idx) => (
              <Tab className="cursor-pointer text-sm " key={idx}>
                {category}
              </Tab>
            ))}
          </TabList>

          {/* portfolio section */}

          {Object.values(categories).map((data, idx) => (
            <TabPanel key={idx} className="flex flex-col justify-center">
              <div className=" grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:gap-6 gap-3">
                <PopularCoursesCard
                  data={data}
                  currentPage={currentPage}
                  pageSize={pageSize}
                />
              </div>
              <div className="flex justify-center">
                <Pagination
                  item={data.length}
                  currentPage={currentPage}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                />
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </Container>
  );
};

export default PopularCourse;
