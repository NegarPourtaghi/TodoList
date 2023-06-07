import React, { useEffect } from "react";

import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
function TodoList(props){
    useEffect(() =>{
        initTE({Ripple });

    },[])
      
      return(
<div
  className="block rounded-lg bg-[#62AFDB] mx-3 mb-6 h-52 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
  <h5
    className="mb-2 text-sm font-medium leading-tight text-white dark:text-neutral-50">
{props.title}
  </h5>
  <p className="mb-4 text-xs text-white">
  {props.todo}
  </p>
  
</div>






    )
}



export default TodoList;