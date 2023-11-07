import { Outlet } from "react-router";
import NavBar from "../componots/NavBar"
import { Suspense } from "react";
import Loader from "../componots/Loader";

function AppLayout() {
    return (
      <>
        <div className=" h-auto sticky top-0 z-30 ">
          <NavBar />
        </div>
        <div className="max-w-6xl  mx-auto">
          <Suspense fallback={<div><Loader/></div>}>

          <Outlet />
          </Suspense>
        </div>
      </>
    );
}

export default AppLayout
