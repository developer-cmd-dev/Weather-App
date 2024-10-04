import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Header() {
  
  const [dark,setDark]=useState(false)

useEffect(()=>{
if(dark){
  document.documentElement.classList.add('dark')
}else{
  document.documentElement.classList.remove('dark')
}
},[dark])

  return (
    <div className="h-16 bg-none  text-white flex items-center justify-center 
                    lg:h-24 dark:bg-gray-800">
      <div className=" w-[90%] h-full flex items-center justify-around">
        <div className="log  w-[50%] ">
          <h1 className="text-2xl font-playWrite ">Weather</h1>
        </div>
        <div className="themeSwitcher  w-[50%] flex items-end justify-end ">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value={dark} className="sr-only peer" onChange={()=>setDark((prev)=>!prev)} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Dark
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
