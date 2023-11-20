import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../Shared/Container/Container";

const Facilities = () => {
  const facilities = [
    {
      num: "60000+",
      title: "Students Choose Creative IT",
      description:
        "Creative IT has become a trusted training institute for not only Bangladeshi residents but also living abroad. More than 60,000 passionate learners are working in different markets after completing courses from our institute.",
      bg: "bg-[#F8FCEA]",
    },
    {
      num: "18000+",
      title: "Got Career Placement.",
      description:
        "Our job placement department has helped more than 16,000 skilled students to find jobs in competitive global markets. Promising a better future, we have successfully raised the job placement rate to 66% by providing continuous career support to the learners.",
      bg: "bg-[#EDFAFD]",
    },
    {
      num: "91%",
      title: "Success Ratio",
      description:
        "Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career. ",
      bg: "bg-[#F8FCEA]",
    },
    {
      num: "28000+",
      title: "Works As Expert Freelancer",
      description:
        "After course completion, a significant number of our students find jobs in multiple sectors. Many of the devoted students start working in the IT domain before completing the courses. Earning dollars from the global marketplace, they become self-reliant and contribute to the progress of our country.",
      bg: "bg-[#EDFAFD]",
    },
  ];

  // slick slider
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 1020,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   };

const settings = {
    autoplay:true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     
     className:'',
      responsive: [
     {
       breakpoint: 1400,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         initialSlide: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         initialSlide: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 911,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         initialSlide: 1,
       }
     },
     {
       breakpoint: 576,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 1,
       }
     }
   ]
   };
  return (
    <Container>
      <div>
        <Slider {...settings}>
          {facilities?.map((d, i) => (
              <div key={i} className={`${d.bg} p-10 wd rounded-xl border mx-auto hover:border-orange-600`}>
                <h2 className="text-2xl font-bold">{d?.num}</h2>
                <h3 className="text-xl font-semibold my-4 ">{d?.title}</h3>
                <p>{d?.description}</p>
              </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Facilities;
