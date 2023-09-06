import { NavLink } from "react-router-dom";
import logo from "../assets/images/eed_logo_white.png";
import NavbarLink from "../components/NavbarLink";
import navigations from "../staticData/navigations";

function Footer() {
  return (
    <footer className="bg-white bg-center bg-no-repeat bg-cover bg-footer-texture px-auto">
      <div className="w-full p-4 py-6 mx-auto max-w-screen-2xl lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            {/* logo */}
            <NavLink to={"/home"}>
              <img src={logo} className="h-40 mr-3" alt="EED Logo" />
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Quick Links
              </h2>
              <ul className="font-thin text-gray-300 ">
                {navigations.map(({ id, path, role, subLinks, title }) => {
                  return (
                    <NavbarLink
                      key={id}
                      role={role}
                      path={path}
                      title={title}
                      subLinks={subLinks}
                      footer={true}
                    />
                  );
                })}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Contact information
              </h2>
              <ul className="font-thin text-gray-300 ">
                <li className="mb-4">
                  <a
                    href="https://www.azhar.eg/magmaa/acc"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Al Azhar Conference Center (ACC)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center ">
            © 2023
            <a
              href="https://www.facebook.com/EgyptianEngineeringDay/"
              className="ml-1 hover:underline"
            >
              EED
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 text-gray-200 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/EgyptianEngineeringDay/"
              target="_blank"
              className="text-gray-200 hover:text-white "
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://twitter.com/EEDNews"
              className="text-gray-200 hover:text-white "
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>

            <a href="#" className="text-gray-200 hover:text-white ">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                  strokeWidth="0"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="sr-only">Youtube channel</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
