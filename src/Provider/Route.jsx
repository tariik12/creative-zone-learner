import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OurCourses from "../Pages/OurCourses/OurCourses";
import Contact from "../Pages/Contact/Contac";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import QuePart from "../Pages/Authentication/Registration/QuePart";
import DashboardLayout from "../Layout/Dashboard/DashboardLayour";
import Profile from "../Components/Dashboard/DsahboardComponent/Profile/Profile";
import Setting from "../Components/Dashboard/DsahboardComponent/Setting/Setting";
import CreateCourse from "../Components/Dashboard/DsahboardComponent/Course/CreateCours/CreateCours";
import ManageCourse from "../Components/Dashboard/DsahboardComponent/Course/ManageCourse/ManageCours";
import PublishedCourse from "../Components/Dashboard/DsahboardComponent/Course/PublishedCourse/PublishedCourse";
import PaymentHistory from "../Components/Dashboard/DsahboardComponent/PaymentHistory/PaymentHistory";
import MassageWithInstructors from "../Components/Dashboard/DsahboardComponent/MassageWithInstructor.jsx/MassageWithInstructor";
import SelectedClasses from "../Components/Dashboard/DsahboardComponent/SelectedClasses/SelectedClasses";
import Error from "../Pages/Error/Error";
import SingleCourseDetails from "../Pages/OurCourses/SingleCourseDetails";
import EditSingleCourse from "../Components/Dashboard/DsahboardComponent/Course/ManageCourse/EditSingleCourse";
import Payment from "../Pages/Payment/Payment";
import PaymentSuccess from "../Pages/Payment/PaymentSucess";
import PaymentError from "../Pages/Payment/PaymentError";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/our-courses",
        element: <OurCourses />,
      },
      {
        path: "/our-courses/:id",
        element: <SingleCourseDetails />,
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard/manageCourse/:id",
        element: <EditSingleCourse />,
        loader: ({params}) => fetch(`https://creative-zone-learners-servers.vercel.app/createCourse/${params.id}`)
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/studnet_or_instructor",
        element: <QuePart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/settings",
        element: <Setting />,
      },
      {
        path: "/dashboard/createCourse",
        element: <CreateCourse />,
      },

      {
        path: "/dashboard/manageCourse",
        element: <ManageCourse />,
      },

      {
        path: "/dashboard/publishedCourse",
        element: <PublishedCourse />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/paymentSuccess/:id",
        element: <PaymentSuccess />,
      },
      {
        path: "/dashboard/paymentError",
        element: <PaymentError />,
      },
      {
        path: "/dashboard/messageWithInstructors",
        element: <MassageWithInstructors />,
      },
      {
        path: "/dashboard/selectedClass",
        element: <SelectedClasses/>,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
