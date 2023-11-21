import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import DropdownUser from "../../Dropdown/DropdownUser/DropdownUser";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user } = useContext(AuthContext) || {}
  const location = useLocation()
const activeRoute = location.pathname;

  const isActiveRoute = (route) => {
    return activeRoute === route ? "active-link" : ''
  }
  return (
    <div className="w-full sticky top-0 ">
      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-screen-2xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center active-link justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2  className="text-2xl font-bold">Creative Zone</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center text-lg justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 ">
                  <Link className={`nav-link md:text-xl font-bold ${isActiveRoute('/')}`} to="/">Home</Link>
                </li>
                <li >
                  <Link className={`nav-link md:text-xl font-bold ${isActiveRoute('/our-courses')}`} to="/our-courses">Our Courses</Link>
                </li>
                <li className="">
                  <Link className={`nav-link text-xl font-bold ${isActiveRoute('/about-us')}`} to="/about-us">About US</Link>
                </li>
                <li className="">
                  <Link className={`nav-link text-xl font-bold ${isActiveRoute('/contact')}`} to="/contact">Contact US</Link>
                </li>            
              </ul>
            </div>
          </div>
          {user ? (
            <div className="lg:flex">
              <DropdownUser />
            </div>
          ) : (
            <Link to="/login">
              <button className="lg:flex">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
