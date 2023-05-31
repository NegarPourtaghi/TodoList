import React from "react";
// Initialization for ES Users
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
  
function Todo(props){
  return(
          <div>
              
            
            <div className="bg-primary rounded">
                  {props.title}
            </div>
            
          </div>
     
  )
}

export default Todo;