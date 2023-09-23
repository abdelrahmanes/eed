/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarLink({
  title,
  role,
  path,
  subLinks,
  footer = false,
  isScrolling,
}) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  const navigate = useNavigate();
  return (
    <>
      <li>
        {role === "link" ? (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? `${
                    footer
                      ? "text-primary"
                      : "block p-2 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 "
                  }`
                : `${
                    footer || isScrolling
                      ? "hover:text-primary transition duration-150 "
                      : "hover:text-primary transition duration-150 p-2 md:p-0 md:text-white text-black"
                  }`
            }
            aria-current="page"
          >
            {title}
          </NavLink>
        ) : (
          <>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className={`flex items-center justify-between w-full md:text-white text-black ${
                footer ? "!text-gray-300 hover:!text-primary" : "px-2"
              }    rounded hover:text-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto  ${
                active && "text-primary"
              }
              ${isScrolling ? "!text-black" : ""}`}
              ref={dropdownRef}
              onClick={() => {
                setActive(!active);
              }}
            >
              {title}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownNavbar"
              className={`z-10 font-normal absolute  bg-white divide-y divide-gray-100 rounded-md shadow w-44  mt-1 md:mt-4 transition-height duration-200 overflow-hidden ${
                active ? "h-[90px]" : "h-0"
              }`}
            >
              <ul
                className="py-2 text-sm text-gray-700 "
                aria-labelledby="dropdownLargeButton"
              >
                {subLinks.length > 0 &&
                  subLinks.map(({ id, path, title }) => {
                    return (
                      <a
                        key={id}
                        href={path}
                        className={`block px-4 py-2 hover:bg-gray-100  transition-all duration-150 ${
                          !active && "invisible"
                        }`}
                        aria-current="page"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(path);
                        }}
                      >
                        {title}
                      </a>
                    );
                  })}
              </ul>
            </div>
          </>
        )}
      </li>
    </>
  );
}

export default NavbarLink;