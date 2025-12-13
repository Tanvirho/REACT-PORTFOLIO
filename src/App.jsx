import React, { Suspense } from "react";
import Main from "./Components/Main";

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
