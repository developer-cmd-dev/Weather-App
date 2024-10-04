import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import {TailSpin} from 'react-loader-spinner'

function Spinner({
  height = "",
  width = "",
  color = "",
  radius = "",
}) {
  return(

   <TailSpin
    height={height}
    width={width}
    color={color}
    ariaLabel="tail-spin-loading"
    radius={radius}
    wrapperStyle={{}}
    wrapperClass=""
    />
  )

  
}

export default Spinner;
