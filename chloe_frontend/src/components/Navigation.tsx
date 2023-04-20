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
      className="sticky z-999 w-screen md:flex top-0 mb-3 sm:space-y-4"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <nav className="flex items-center justify-between space-x-10 mx-36">
        <div className="justify-start shrink-0 pl-2 pr-36 py-8 text-3xl font-bold text-violet-800">
          <Link to={"/"}>CHLOE Lee</Link>
        </div>

        <div className={"hidden md:flex justify-end p-2"}>
          <div
            onMouseEnter={handleHoverEffectOn}
            onMouseLeave={handleHoverEffectOff}
            className="mx-6"
          >
            <NavLink
              to="/"
              className={
                mouseOn === "Home"
                  ? "font-bold pb-4 text-lg text-violet-800"
                  : "font-bold pb-4 text-lg text-gray-700"
              }
            >
              Home
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
                  ? "font-bold pb-4 text-lg text-violet-800"
                  : "font-bold pb-4 text-lg text-gray-700"
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
                  ? "font-bold pb-4 text-lg text-violet-800"
                  : "font-bold pb-4 text-lg text-gray-700"
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
                  ? "font-bold pb-4 text-lg text-violet-800"
                  : "font-bold pb-4 text-lg text-gray-700"
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
                  ? "font-bold pb-4 text-lg text-violet-800"
                  : "font-bold pb-4 text-lg text-gray-700"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="md:hidden absolute right-5 top-5">
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
          "md:hidden shrink-0 flex-col space-y-2 place-items-center items-center justify-center",
          {
            hidden: !menuToggle,
          }
        )}
      >
        <NavLink
          to="/"
          className="block py-2 px-4 text-sm text-gray-700 hover:text-violet-800"
        >
          About Chloe
        </NavLink>
        <NavLink
          to="/experience"
          className="block py-2 px-4 text-sm text-gray-700 hover:text-violet-800"
        >
          Experience
        </NavLink>
        <NavLink
          to="/education"
          className="block py-2 px-4 text-sm text-gray-700 hover:text-violet-800"
        >
          Education
        </NavLink>
        <NavLink
          to="/projects"
          className="block py-2 px-4 text-sm text-gray-700 hover:text-violet-800"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="block py-2 px-4 text-sm text-gray-700 hover:text-violet-800"
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
