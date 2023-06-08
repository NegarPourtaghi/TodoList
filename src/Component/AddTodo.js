import React,{useEffect, useState} from "react";
// Initialization for ES Users
import {
    Modal,
    Ripple,
    initTE,
  } from "tw-elements";
 
function AddTodo(props){


    useEffect(() =>{
        initTE({ Modal, Ripple });

    },[])

const [Title, setTitle]=useState('')
const [Todo, setTodo]=useState('')


let  formHandler=e =>{
  
    e.preventDefault();
props.add(Title,Todo);
setTitle('');
setTodo('');

var Todoos=JSON.parse(localStorage.getItem('Todoos') || "[]")

var Todoo={
  Title: Title,
Todo :Todo
}
Todoos.push(Todoo)
localStorage.setItem('Todoos',JSON.stringify(Todoos))
let data=localStorage.getItem('Todoos')
data=JSON.parse(data)
console.log(data)
props.add(data)
}

let  inputHandler= e => setTitle(e.target.value)

let  inputHandler1= e => setTodo(e.target.value)



return(
   <>
    <div className="space-y-2 grid justify-items-end">

  <button
    type="button"
    className="inline-block rounded bg-success text-neutral-50 py-1 px-6 text-sm "
    data-te-toggle="modal"
    data-te-target="#exampleModalCenteredScrollable"
    data-te-ripple-init
    data-te-ripple-color="light">
new note  </button>
</div>

<div
  data-te-modal-init
  className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none "
  id="exampleModalCenteredScrollable"
  tabIndex="-1"
  aria-labelledby="exampleModalCenteredScrollable"
  aria-modal="true"
  role="dialog">
  <div
    data-te-modal-dialog-ref
    className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
    <div
      className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-[#EDEDED] bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
       
        className="flex flex-shrink-0 items-center  rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
       
        <button
          type="button"
          className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="relative p-4 m-4">
       <form className="grid" onSubmit={formHandler}>
        <input className="titleinput w-2/4 rounded mb-6 p-1"  value={Title} placeholder="Title"    onChange={inputHandler}/>
        <textarea type="text" rows="4"  className="todoinput w-3/4 rounded mb-6 p-1" value={Todo} placeholder="Todo"   onChange={inputHandler1}  />
        
       <div className="grid">
       <button
          type="submit"
          className="inline-block rounded bg-[#219AC0] w-2/6 mx-auto text-white mb-2  px-6 py-1 text-xs font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Add note
        </button>
        <button
          type="button"
          className="inline-block rounded bg-[#F04A4A] text-white  w-2/6 mx-auto px-6 py-1 text-xs font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Cancel
        </button>
       </div>
          </form>
      </div>

    
    </div>
  </div>
</div>
   
   </>
)
}


export default AddTodo;