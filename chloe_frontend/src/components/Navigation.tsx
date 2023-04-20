import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import NavItem from "./navItem";

const menu = [
  { name: "Home", address: "/" },
  { name: "Experience", address: "/experience" },
  { name: "Education", address: "/education" },
  { name: "Project", address: "/project" },
  { name: "Contact", address: "/contact" },
];

function Navigation() {
  return (
    <div
      className="sticky z-999 w-screen flex place-items-center justify-center top-0 mb-3"
      style={{ backgroundColor: "#6A5ACD" }}
    >
      <nav className="flex items-center justify-between space-x-10 mx-36">
        <div
          className="justify-start pl-8 pr-36 py-5 text-2xl font-bold"
          style={{ color: "#E6E6FA" }}
        >
          <Link to={"/"}>CHLOE</Link>
        </div>
        <div className="flex justify-end p-2">
          {menu.map((data) => (
            <NavItem data={data} key={data.address} />
          ))}
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
