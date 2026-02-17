import "./Routing.css";

import RoutingProfile from "../Routing-Profile/Routing-Profile";
// import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/profiles",
//     element: <RoutingProfile />,
//   },
// ]);

export default function Routing() {
  return (
    <div className="routing--container">
      <h1>React Routing</h1>
      {/* <Link to="/profiles">Profiles</Link> */}
      <RoutingProfile />
      <h2>About</h2>
      <h2>Contact us</h2>
      <h2>Help</h2>
    </div>
  );
}
