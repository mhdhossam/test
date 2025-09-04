import Navbar2 from "../component/Navbar/Navbar2";
import { Outlet, useLocation } from "react-router-dom";
import { FC } from "react";

const RootLayout: FC = () => {
  const location = useLocation();

  // List of routes where the Navbar should be hidden
  const noNavbarRoutes = ["/register", "/login", "/vendorRegister"];

  // Check if the current route is in the list
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar2 />} {/* Conditionally render Navbar */}
      <Outlet />
    </>
  );
};

export default RootLayout;
