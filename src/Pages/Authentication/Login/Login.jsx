import { Link, useNavigate } from "react-router-dom";
import Container from "../../../Components/Shared/Container/Container";
import loginImg from "../../../assets/authentic/login.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const {signIn} = useContext(AuthContext) || {}
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        console.log(result);
        alert("done");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
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
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 lg:w-[400px] w-full"
              >
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
                      className="block w-full rounded-md border-0 px-2 py-3 py-1.5 text-orange-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
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
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-orange-600 hover:text-orange-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      {...register("password")}
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 px-2 py-3 py-1.5 text-orange-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Login
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm ">
                Don't have an account?
                <Link
                  to="/registration"
                  className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
                >
                  Create new Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
