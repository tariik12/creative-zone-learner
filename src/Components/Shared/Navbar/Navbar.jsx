import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const activeRoute = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isRouteActive = (route) => {
    return activeRoute === route ? 'active-link' : ' ';
  };
  return (
    <div className="fixed z-30 w-full md:top-0 ">
      <nav className={`navbar ${
      scrolling ? 'bg-black  font-bold w-full ' : 'bg-[#2b252529] text-white w-full  '
    }`} >
        <div  className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2  ><span className={`navbar ${
      scrolling ? '   text-2xl text-white font-bold' : 'text-[#FF5900]  text-2xl font-bold '
    }`}>Creative</span> <span className={`navbar ${
        scrolling ? ' text-[#FF5900]  w-full text-2xl font-bold' : ' text-white  text-2xl font-bold '
      }`}>Zone</span></h2>
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
              className={`flex-1 justify-self-center p-3  md:block md:pb-0 md:mt-0 bg-black md:bg-transparent ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center text-lg justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                <li  className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/')}`}>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link  to="/"  className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/')}`}>Blog</Link>
                </li>
                <li className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/')}`}>
                  <Link to="/">About US</Link>
                </li>
                <li  className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/')}`}>
                  <Link to="/">Contact US</Link>
                </li>
                <li  className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/')}`}>
                  <Link className="flex lg:hidden" to="/login">
                    <button>Login</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link className="hidden lg:flex" to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
