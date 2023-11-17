import { useForm } from "react-hook-form";
import { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Payment = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`https://creative-zone-learners-servers.vercel.app/createCourse/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const courseDetails = await response.json();
        setCourseDetails(courseDetails);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const { user } = useContext(AuthContext) ||{};
  const { register, handleSubmit } = useForm();

  const memoizedUser = useMemo(() => user, [user]);
  const total = courseDetails ? parseFloat(courseDetails.courseFee) : 0;

  const onSubmit = (data) => {
    data.price = parseInt(total);
    if (data) {
      fetch("https://creative-zone-learners-servers.vercel.app/admission", {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          window.location.replace(result.url);
          console.log(result);
        });
    }
  };

  if (!courseDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className=" container mt-8">
        <h1 className="text-3xl font-semibold mb-4 text-center text-orange-500">Admission Confirm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
          {/* ... rest of your form */}
          <div>
                  <label
                    htmlFor="studentEmail"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                    Student Email
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("studentEmail")}
                      defaultValue={memoizedUser?.email}
                      id="studentEmail"
                      name="studentEmail"
                      type="email"
                      readOnly
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
          <div>
                  <label
                    htmlFor="studentName"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                    Student Name
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("studentName")}
                      id="studentName"
                      name="studentName"
                      type="text"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-2">
                    <textarea
                      {...register("studentAddress")}
                      id="studentAddress"
                      name="studentAddress"
                      type="text"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
          {/* ... rest of the form */}
          <div className="flex justify-center mt-6">
          <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Admission Confirm
                  </button>
                </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
