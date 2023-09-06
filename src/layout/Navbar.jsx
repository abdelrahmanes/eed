import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import darklogo from "../assets/images/eed_logo_dark.png";
import whiteLogo from "../assets/images/eed_logo_white.png";
import NavbarLink from "../components/NavbarLink";
import navigations from "../staticData/navigations";

function Navbar() {
  const [active, setActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav
      className={`fixed left-0 z-20 w-full ${
        isScrolling ? "!bg-white" : "!bg-transparent "
      }   -top-10 `}
    >
      <div className="flex items-center justify-between p-4 mx-auto flex-nowrap max-w-screen-2xl">
        {/* logo */}
        <NavLink to={"/home"}>
          <img
            src={isScrolling ? darklogo : whiteLogo}
            className="h-40 mr-3"
            alt="EED Logo"
          />
        </NavLink>

        {/* small screens */}
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className={`inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden hover:bg-primary hover:!text-white focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-sticky ${
            isScrolling
              ? "!text-black hover:text-white !border-black"
              : "!text-white"
          }`}
          aria-expanded="false"
          onClick={(e) => {
            e.preventDefault();
            setActive(!active);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul
          className={`fixed z-[99999999999999999999999] flex flex-col gap-4  mt-4 font-medium text-left bg-white  border-gray-200 rounded-md left-1 right-1 top-20 overflow-hidden md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  transition-all duration-150 ${
            active
              ? `h-[320px] p-4
              border`
              : "h-0 "
          }`}
        >
          {navigations.map(({ id, path, role, subLinks, title }) => {
            return (
              <NavbarLink
                key={id}
                role={role}
                path={path}
                title={title}
                subLinks={subLinks}
                toggleMenu={setActive}
              />
            );
          })}
        </ul>
        {/* <div className="flex hidden md:order-2">
          <button
            type="button"
            className="px-4 py-2 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-[#f2a202] focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800 transition duration-150"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div> */}
        {/* large screens */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 mt-4 font-medium border border-gray-100 md:p-0 roundedLg md:flex-row md:space-x-4 lg:space-x-8 md:mt-0 md:border-0  `}
          >
            {navigations.map(({ id, path, role, subLinks, title }) => {
              return (
                <NavbarLink
                  key={id}
                  role={role}
                  path={path}
                  title={title}
                  subLinks={subLinks}
                  isScrolling={isScrolling}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
