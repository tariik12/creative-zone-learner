import Banner from "../../Components/Home/Banner/Banner";
import CourseCategory from "../../Components/Home/CourseCategory/CourseCategory";
import Facilities from "../../Components/Home/Facilities/Facilities";
import FreeCourses from "../../Components/Home/FreeCourses/FreeCourses";
import OurProgress from "../../Components/Home/OurProgress/OurProgress";
import PopularCourse from "../../Components/Home/PopularCourse/PopularCourse";
// import CourseCategory from "../../Components/Shared/CourseCategory/CourseCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurProgress />
      <CourseCategory />
      {/* <CourseCategory /> */}
      <PopularCourse />
      <Facilities />
      <FreeCourses />
    </div>
  );
};

export default Home;
