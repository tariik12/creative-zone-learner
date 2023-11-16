import { Link, useNavigate } from "react-router-dom";
import Container from "../../../Components/Shared/Container/Container";
import loginImg from "../../../assets/authentic/login.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Registration = () => {
  const { register, handleSubmit } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);

    if (data.password != data.confirm_password) {
      alert("Vaaag");
      return;
    }

    if (data) {
      createUser(data.email, data.password).then((result) => {
        // console.log(result);
        if (result.user) {
          updateUserProfile(data.name, data.photo).then(() => {
            const saveUser = { name: data.name, email: data.email };

            fetch("https://creative-zone-learners-servers-k39z0z9tj-tariik12.vercel.app/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  // reset()
                  alert("done");
                  navigate("/studnet_or_instructor");
                }
              });
          });
        }
      });
    }
  };
  return (
    <Container>
      <div className="md:flex justify-evenly py-20">
        <img
          className="hidden lg:flex w-[550px] h-[550px]"
          src={loginImg}
          alt=""
        />
        <div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-900">
                Register to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 lg:w-[400px] w-full"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("name")}
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-orange-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("email")}
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-orange-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      {...register("password")}
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="confirm_password"
                      className="block text-sm font-medium leading-6 text-orange-900"
                    >
                      Confirm Password
                    </label>
                    <input
                      {...register("confirm_password")}
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0  text-orange-900 px-2 py-3 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Registration
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm ">
                Already registeres?
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
