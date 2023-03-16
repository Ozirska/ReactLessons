import React from "react";
import Counter from "./Counter.jsx";

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={0} interval={2000} />
      <Counter start={-365} interval={1100} />
    </>
  );
};

export default App;
