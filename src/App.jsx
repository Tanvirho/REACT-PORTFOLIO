import React, { Suspense } from "react";
import Outlet from "./components/Outlet";

const App = () => {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default App;
