import React, { useContext } from "react";
import Container from "../../../Components/Shared/Container/Container";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const QuePart = () => {
  const { user } = useContext(AuthContext) || {};
 
  const navigate = useNavigate();
  const email = user?.email;

  const hanldeGetText = (text) => {
    // patch to user api
    axios
      .patch(`https://creative-zone-learners-servers-k39z0z9tj-tariik12.vercel.app/users/${email}`, {
        role:
          text == "Here I want to learn something" ? "student" : "instructor",
      })
      .then((res) => {
        console.log(res.data);
        alert("done");
        navigate("/")
      });
  };

  return (
    <Container>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="text-center">
          <div
            onClick={() => hanldeGetText("Here I want to learn something")}
            className="shadow-xl hover:bg-orange-600 transition-all hover:text-white cursor-pointer w-[600px] mt-10 font-bold text-3xl p-10"
          >
            Here I want to learn something
          </div>
          <div
            onClick={() => hanldeGetText("I like teach other")}
            className="shadow-xl hover:bg-orange-600 transition-all hover:text-white cursor-pointer w-[600px] mt-10 font-bold text-3xl p-10"
          >
            I like teach other
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuePart;
