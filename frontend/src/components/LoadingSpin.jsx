import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoadingSpin = () => {
  return (
    <>
      <div className="text-center">
        <div className="Oswald_regular text-center fs-1">Loading...</div>
        <ScaleLoader />
      </div>
    </>
  );
};
export default LoadingSpin;