import { Outlet } from "react-router-dom";
import LaunchNavbar from "../Components/MainNavbar";

function RootLayout() {
  return (
    <>
      <LaunchNavbar />
      <main>
        <Outlet end />
      </main>
    </>
  );
}

export default RootLayout;
