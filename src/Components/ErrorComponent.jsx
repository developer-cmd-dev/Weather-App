import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideSpinner } from "../features/Spinner/spinnerSlicer";

function ErrorComponent({ classname = "", closeErrorFunc, children = "" }) {
  const dispatch = useDispatch();
  const handleErrorFunc = () => {
    closeErrorFunc(false);
    dispatch(hideSpinner());
  };
  return (
    <div
      className={`bg-red-600 border-none rounded-xl absolute top-28 flex items-center justify-between px-7 text-white h-10 w-[90%] `}
    >
      {children}
      <button
        className="bg-black text-white w-20 h-8 rounded-xl"
        onClick={() => handleErrorFunc()}
      >
        Close
      </button>
    </div>
  );
}

export default ErrorComponent;
