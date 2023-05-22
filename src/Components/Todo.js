import React from "react";
// Initialization for ES Users
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
function Todo(props){
return(
<div >
    
  
  <div className=" rounded">
  {props.text}

  </div>
  
</div>
    
)
}

export default Todo;