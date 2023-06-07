import React, { useState } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App (){
    const [statetodos, setTodosState]=useState({
        todos:[
            
        ]
    })


  let  addTodo=(Title,Todo ) => {
     setTodosState(prevState => {
            return {
                todos : [
                    ...prevState.todos,
                    { key : Date.now() , done : false , Title, Todo }

                ]

            }

        })

    }
 
    return(
<div className="container w-10/12 mx-auto mt-10 px-8 py-9  shadow-[0px_0px_18px_4px_rgba(0,0,0,0.1)] rounded-xl">
<AddTodo add={addTodo}/>

<ul
  class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation">
    <a
      href="#tabs-home"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-1 pt-4 text-sm  font-medium  text-black leading-tight focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-black dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-home"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home"
      aria-selected="true"
      >notes</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-profile"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-1 pt-4 text-sm  font-medium  text-black leading-tight focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-black dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-profile"
      role="tab"
      aria-controls="tabs-profile"
      aria-selected="false"
      >blog</a
    >
  </li>
</ul>

<div class="mb-6">
  <div
    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-home"
    role="tabpanel"
    aria-labelledby="tabs-home-tab"
    data-te-tab-active>

<div className=" grid grid-cols-5">
{
    statetodos.todos.map(item =><TodoList title={item.Title} todo={item.Todo} key={item.id}/>
    )
}
</div>

  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-profile"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
 
  
</div>
</div>
    )
}




export default App;