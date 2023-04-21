import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  NavLink,
} from "react-router-dom";
import classNames from "classnames";

function Navigation() {
  const [mouseOn, setMouseOn] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);

  const handleHoverEffectOn = (e: any) => {
    setMouseOn(e.target.innerText);
  };
  const handleHoverEffectOff = () => {
    setMouseOn("");
  };

  return (
    <div
      className="sticky z-999 w-screen lg:flex top-0 mb-3 sm:space-y-4"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <nav className="flex items-center justify-between space-x-6 mx-36">
        <div className="justify-start shrink-0 pr-20 py-8 text-2xl font-bold text-violet-800">
          <Link to={"/"}>CHLOE</Link>
        </div>

        <div className={"hidden lg:flex py-2"}>
          <div
            onMouseEnter={handleHoverEffectOn}
            onMouseLeave={handleHoverEffectOff}
            className="mx-6"
          >
            <NavLink
              to="/aboutme"
              className={
                mouseOn === "About"
                  ? "font-bold text-base text-violet-800"
                  : "font-bold text-base text-gray-700"
              }
            >
              About
            </NavLink>
          </div>
          <div
            onMouseEnter={handleHoverEffectOn}
            onMouseLeave={handleHoverEffectOff}
            className="mx-6"
          >
            <NavLink
              to="/experience"
              className={
                mouseOn === "Experience"
                  ? "font-bold pb-4 text-base text-violet-800"
                  : "font-bold pb-4 text-base text-gray-700"
              }
            >
              Experience
            </NavLink>
          </div>
          <div
            onMouseEnter={handleHoverEffectOn}
            onMouseLeave={handleHoverEffectOff}
            className="mx-6"
          >
            <NavLink
              to="/education"
              className={
                mouseOn === "Education"
                  ? "font-bold pb-4 text-base text-violet-800"
                  : "font-bold pb-4 text-base text-gray-700"
              }
            >
              Education
            </NavLink>
          </div>
          <div
            onMouseEnter={handleHoverEffectOn}
            onMouseLeave={handleHoverEffectOff}
            className="mx-6"
          >
            <NavLink
              to="/project"
              className={
                mouseOn === "Project"
                  ? "font-bold pb-4 text-base text-violet-800"
                  : "font-bold pb-4 text-base text-gray-700"
              }
            >
              Project
            </NavLink>
          </div>
          <div
            onMouseEnter={handleHoverEffectOn}
            onMouseLeave={handleHoverEffectOff}
            className="mx-6"
          >
            <NavLink
              to="/contact"
              className={
                mouseOn === "Contact"
                  ? "font-bold pb-4 text-base text-violet-800"
                  : "font-bold pb-4 text-base text-gray-700"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="lg:hidden absolute right-10 top-6">
        <button onClick={() => setMenuToggle(!menuToggle)}>
          {menuToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={classNames(
          "lg:hidden shrink-0 flex flex-col space-y-2 items-center justify-center",
          {
            hidden: !menuToggle,
          }
        )}
      >
        <NavLink
          to="/aboutme"
          className="block py-2 px-4 text-base text-gray-700 hover:text-violet-800"
        >
          About
        </NavLink>
        <NavLink
          to="/experience"
          className="block py-2 px-4 text-base text-gray-700 hover:text-violet-800"
        >
          Experience
        </NavLink>
        <NavLink
          to="/education"
          className="block py-2 px-4 text-base text-gray-700 hover:text-violet-800"
        >
          Education
        </NavLink>
        <NavLink
          to="/projects"
          className="block py-2 px-4 text-base text-gray-700 hover:text-violet-800"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="block py-2 px-4 text-base text-gray-700 hover:text-violet-800"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter(Navigation);
