import React, { createContext } from "react";
import CompA from "./CompA";
const studentDetails = createContext();

const App = () => {
  let studentMarks = 99;
  let name = "durga";
  return (
    <>
      <studentDetails.Provider value={[studentMarks, name]}>
        <CompA />
      </studentDetails.Provider>
    </>
  );
};

export { studentDetails };
export default App;
