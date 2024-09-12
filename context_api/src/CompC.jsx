import React from "react";
import { studentDetails } from "./App";

const CompC = () => {
  return (
    <>
      <h1>Welcome comp c</h1>
      <studentDetails.Consumer>
        {(getdata) => {
          return (
            <h3>
              she real marks are {getdata[0]} and name is: {getdata[1]}
            </h3>
          );
        }}
      </studentDetails.Consumer>
    </>
  );
};

export default CompC;
