import Banner from "../../Components/Home/Banner/Banner";
import CourseCategory from "../../Components/Home/CourseCategory/CourseCategory";
import Facilities from "../../Components/Home/Facilities/Facilities";
import PopularCourse from "../../Components/Home/PopularCourse/PopularCourse";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CourseCategory />
      <PopularCourse />
      <Facilities />
    </div>
  );
};

export default Home;
