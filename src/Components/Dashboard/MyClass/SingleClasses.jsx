import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Shared/Container/Container";

const singleClass5 = [
  {
    name: "HTML5 Class",
    video: 'https://www.youtube.com/embed/b4Rlq3KTSik?si=aLLQRaPmZgPmSuzw'
  },
  {
    name: "CSS3 Class",
    video: 'https://www.youtube.com/embed/bHHuozuq_Kk?si=1WsBsZoGpqVS1mlV'
  },
  {
    name: "JavaScript Class",
    video: 'https://www.youtube.com/embed/rePN-VFo1Eo?si=8ddudot01MCvFiue'
  }
];

const SingleClasses = () => {
  const [filterData, setFilterData] = useState(null);

  const categories = [...new Set(singleClass5.map(course => course.name))];

  const handleFiltering = (name) => {
    const filteredData =name ==="HTML5 Class"?"https://www.youtube.com/embed/b4Rlq3KTSik?si=aLLQRaPmZgPmSuzw": singleClass5.filter(({ name: courseCategory }) => courseCategory === name);
    setFilterData(filteredData);
  };

  return (
    <Container>
      <div className="">
        <h1 className="text-4xl font-bold text-orange-600 py-6 ">My Classes</h1>

        <section className="flex justify-center">
          <div className="rounded-xl shadow-md w-full sm:w-full md:w-[400px] lg:w-[400px] xl:w-[400px] border-2">
            {filterData && (
              <iframe width="560" height="315" src={filterData[0].video} title="YouTube video player"  allowFullScreen></iframe>
            )}
          </div>
        </section>

        <section>
          <ul>
            {categories.map((category, i) => (
              <Link to="" className="px-10 py-14" key={i} onClick={() => handleFiltering(category)}>
                <li key={i}>{category}</li>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
};

export default SingleClasses;
