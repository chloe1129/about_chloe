import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  NavLink,
} from "react-router-dom";

function Navigation() {
  const [mouseOn, setMouseOn] = useState("");

  const handleHoverEffectOn = (e: any) => {
    setMouseOn(e.target.innerText);
  };
  const handleHoverEffectOff = () => {
    setMouseOn("");
  };

  return (
    <div
      className="sticky z-999 w-screen flex place-items-center justify-center top-0 mb-3"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <nav className="flex items-center justify-between space-x-10 mx-36">
        <div className="justify-start shrink-0 pl-8 pr-36 py-8 text-3xl font-bold text-violet-800">
          <Link to={"/"}>CHLOE Lee</Link>
        </div>
        <div className="flex justify-end p-2">
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
