import React, { Suspense } from "react";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Suspense>
        <Main />
      </Suspense>
    </>
  );
};

export default App;
