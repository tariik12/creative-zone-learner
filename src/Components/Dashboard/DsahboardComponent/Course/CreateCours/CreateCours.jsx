import {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../../BreadCrumb/Breadcrumb";
import CreatableSelect from "react-select/creatable"
import axios from "axios";
import { AuthContext } from "../../../../../Provider/AuthProvider";
const options = [
    { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
    { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
    { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
  ];
  const image_hosting_Token = '3a33e8b148e73275cb371103f11b2579'
const CreateCourse = () => {
    const { register, handleSubmit, reset } = useForm();
    const [syllabus, setSyllabus] = useState(null);
    const { user } = useContext(AuthContext) || {};
  
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_Token}`
  
    const onSubmit = (data) => {
      data.syllabus = syllabus
        data.instructorEmail = user.email
        data.instructorName = user.displayName
      const formData = new FormData();
      formData.append('image',data.image[0])
      fetch(img_hosting_url,{
        method:'POST',
        body:formData
      })
      .then(res =>res.json())
      .then(imgResponse =>{
        if(imgResponse.success){
      const imageUrl = imgResponse.data.display_url;
      data.image = imageUrl
        
console.log(data)


axios
      .post("http://localhost:5000/createCourse", data)
      .then((res) => {
        console.log(res.data);
        alert("done");
       
      });
      reset()
  }})

    }
  
    return (
       
     
        <div>
                 <Breadcrumb pageName="FormLayout" />
                 <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6  w-full"
              >
          <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-900">
               Create Your Course
              </h2>
            </div>

          <div className="md:flex w-full justify-evenly gap-2 p-2">
          <div className="w-full">
                  <label
                    htmlFor="courseName"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                    Course Name
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("courseName")}
                      id="courseName"
                      name="courseName"
                      type="text"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
          <div className="w-full">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                   Course Category
                  </label>
                  <div className="mt-2">
                  <select
             className="block w-full rounded-md border-0  text-orange-900 px-2 py-4 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
             {...register("category")}
             id="category"
             name="category"
             
             required
          >
            <option > Selected</option>
            <option value=" Graphic & Multimedia"> Graphic & Multimedia</option>
            <option value="Web & software">Web & software</option>
            <option defaultValue value="Digital marketing">
            Digital marketing
            </option>
            <option defaultValue value="3D animation">
            3D animation
            </option>
            <option defaultValue value="Robotics & Automation">
            Robotics & Automation
            </option>
            <option defaultValue value="Cyber Security">
            Cyber Security
            </option>
          </select>
                  </div>
                </div>
          </div>

          <div className="md:flex w-full justify-evenly gap-2 p-2">
          <div className="w-full">
                  <label
                    htmlFor="courseFee"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                   Course Fee
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("courseFee")}
                      id="courseFee"
                      name="courseFee"
                      type="text"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
          <div className="w-full">
                  <label
                    htmlFor="courseDuration"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                  Duration
                  </label>
                  <div className="mt-2">
                  <select
             className="block w-full rounded-md border-0  text-orange-900 px-2 py-4 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
             {...register("courseDuration")}
             id="courseDuration"
             name="courseDuration"
             type="text"
             required
          >
            <option > Selected</option>
            <option value="1"> 1  </option>
            <option value="2"> 2  </option>
            <option value="3"> 3  </option>
            <option value="4"> 4  </option>
            <option value="5"> 5  </option>
            <option value="6"> 6  </option>
            <option value=""> 7  </option>
            <option value="8"> 8  </option>
            <option value="9"> 9  </option>
            <option value="10"> 10  </option>
          </select>
                  </div>
                </div>
          </div>
          <div className="md:flex w-full justify-evenly gap-2 p-2">
          <div className="w-full">
                  <label
                    htmlFor="lecture"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                   Lecture
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("lecture")}
                      id="lecture"
                      name="lecture"
                      type="number"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
          <div className="w-full">
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                  Project
                  </label>
                  <div className="mt-2">
                  <select
             className="block w-full rounded-md border-0  text-orange-900 px-2 py-4 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            id="project"
            {...register('project')}
            required
          >
            <option > Selected</option>
            <option value="5"> 5  </option>
            <option value="10"> 10  </option>
            <option value="15"> 15 </option>
            <option value="20">  20</option>
          </select>
                  </div>
                </div>
          </div>
          <div className="md:flex w-full justify-evenly gap-2 p-2">
          <div className="w-full">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                  Image
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("image")}
                      id="image"
                      name="image"
                      type="file"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
          <div className="w-full">
                  <label
                    htmlFor="syllabus"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                 Syllabus
                  </label>
                  <div className="mt-2 my-2">
                  <CreatableSelect
                                    defaultValue={syllabus}
                                    onChange={setSyllabus}
                                    options={options }
                                    isMulti
                                    required
                                    className="block w-full rounded-md border-0  text-orange-900 px-2  shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset p-1 focus:ring-orange-600 sm:text-sm sm:leading-6"
                                />
                  </div>
                </div>
          </div>
          <div className="w-full">
                  <label
                    htmlFor="CourseBio"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                  BIO
                  </label>
                  <div className="mt-2">
                    <textarea
                      {...register("CourseBio")}
                      id="CourseBio"
                      name="CourseBio"
                      type="text"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
          <div className="w-full">
                  <label
                    htmlFor="courseOverView"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                  OverView
                  </label>
                  <div className="mt-2">
                    <textarea
                      {...register("courseOverView")}
                      id="courseOverView"
                      name="courseOverView"
                      type="text"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
          </div>
          <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="flex w-1/6 mt-5  justify-center rounded-md bg-orange-600 px-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Create Course
                  </button>
                </div>
                </form>
        </div>
      
    );
  };
  
  export default CreateCourse;
  