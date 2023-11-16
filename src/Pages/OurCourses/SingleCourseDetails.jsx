import React from "react";
import Container from "../../Components/Shared/Container/Container";
import { useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import img1 from '../../assets/courses/singlecourse/img1.png'
import img2 from '../../assets/courses/singlecourse/img2.png'
import img3 from '../../assets/courses/singlecourse/img3.png'
import img4 from '../../assets/courses/singlecourse/img4.png'
import img5 from '../../assets/courses/singlecourse/img5.png'
import img6 from '../../assets/courses/singlecourse/img6.png'
import img7 from '../../assets/courses/singlecourse/img7.png'

const SingleCourseDetails = () => {

    const whychooseus = [
        {
            icon: img1,
            name: "Online Live Batch",
            description: "Do you live abroad or prefer a remote learning process? We have launched online batches with all the offline facilities so that you can keep up with the technical advancement of today’s world. Now you can enroll in any course from anywhere, at any time.",
        },
        {
            icon: img2,
            name: "Review Class",
            description: "Do you face difficulty when you review the previous concepts? To ensure the best learning outcome, we arrange review classes that help our students overcome any problem in their skill development process. You will be able to understand the topics that you find complex under the close supervision of our skilled mentors.",
        },
        {
            icon: img3,
            name: "Lifetime Support",
            description: "Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24 hours service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.",
        },
        {
            icon: img4,
            name: "Practice lab support",
            description: "We offer our students practice lab support so that they can complete their courseworks feasibly at any time. The uninterrupted learning environment that we ensure, helps the student gather practical knowledge in an efficient manner.",
        },
        {
            icon: img5,
            name: "Class Videos",
            description: "No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.",
        },
        {
            icon: img6,
            name: "Career Placement Support",
            description: "Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager.  So far this department has helped more than 16000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 66% in 2023.",
        },
        {
            icon: img7,
            name: "Virtual Internship",
            description: "Without in-hand experience, no one can be competent in any skill. Practical work experience is a must have for better career opportunities. CIT offers its students virtual internship opportunities, where they can work under the supervision of industry experts. The online internships qualify to be as effective as offline work experience. Hence, you can also complete our internship at our office. ",
        },
    ]

  const data = useLoaderData();
  console.log(data);
  return (
    <Container>
      <div className="my-14 grid grid-cols-2">
        <div>
          <h2 className="text-orange-600 text-2xl font-bold">
            Turn Your Passion into a Profession
          </h2>
          <h1 className="text-3xl font-bold my-4 ">
            {data?.courseName}
          </h1>
          <div className="flex text-center text-2xl font-semibold gap-6">
            <div className="p-6 border-2 shadow-md">
              Duration <br /> {data?.courseDuration} Month
            </div>
            <div className="p-6 border-2 shadow-md">
              Lectures <br /> {data?.lecture}
            </div>
            <div className="p-6 border-2 shadow-md">
              Projects <br /> {data?.project}
            </div>
            <div className="p-6 border-2 shadow-md">
              Fee <br /> {data?.courseFee} BDT
            </div>
          </div>
          <p className="text-gray-600 my-6 text-xl">{data?.CourseBio}</p>

          <div className="flex gap-2">
            <div>
              <button>Admission</button>
              <Rating
                className="mt-2"
                style={{ maxWidth: 70 }}
                value={data?.ratings || 0}
                readOnly
              />{" "}
            </div>
            <div>
              <button>Join free seminar</button>
              <p className="mt-2">Total Student {data?.enrolled || 0}</p>
            </div>
          </div>
          {/* overview */}
          <h2 className="text-4xl font-bold my-4">Course Overview</h2>
          <p className="text-xl text-gray-600">{data?.courseOverView}</p>

          {/* curriculumn */}
          <div className="bg-[#FAF9FD] my-14 p-6 w-[700px] ">
            <h2 className="text-4xl font-bold my-4">Course Curriculum</h2>
            <div className="grid md:grid-cols-2">
              {data?.syllabus.map((d, i) => (
                <li key={i}>{d?.value}</li>
              ))}
            </div>
          </div>

          {/* Exclusive Solutions That Set Us Apart */}

          <h2 className="text-4xl font-bold my-4">Exclusive Solutions That Set Us Apart</h2>
          <div className="grid grid-cols-2 gap-10 justify-center">
            {
                whychooseus.map((d,i) => (
                    <div key={i} className="bg-[#FAFDF1] rounded-2xl p-10">
                        <div className="flex justify-center">
                        <img src={d?.icon} alt="" />
                        </div>
                        <h2 className="text-center text-2xl font-bold my-4">{d?.name}</h2>
                        <p className="text-center text-gray-500">{d?.description}</p>
                    </div>
                ))
            }
          </div>
        </div>
        {/* Right side */}
        <div className="">
          <img className="w-[700px] h-[400px]" src={data?.image} alt="" />
          <div className="bg-[#FAFDF1] rounded-2xl my-10 py-10 text-center">
            <h2 className="text-2xl font-semibold">Instructor Info</h2>
            <h2 className="text-xl font-bold my-3">Name: {data?.instructorName}</h2>
            <a href={data?.instructorEmail}>{data?.instructorEmail}</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleCourseDetails;
