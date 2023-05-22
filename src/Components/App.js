import React, { Component } from "react"


// Import Components
import AddTodo from "./AddTodo";
import Todo from "./Todo";

class App extends Component {
  
state={
    todos:[]
}


formAdd(text, text1){
    this.setState(prevstate=>{
        return{
            todos:[
                ...prevstate.todos,
                {
                    key:Date.now(), done:false, text:text, text1:text1
                }
            ],
            formInput:''
    
        }
    })
  }
  
render(){
    let {todos}=this.state
  return(

   
<div className="flow-root  w-4/5 mx-auto my-20 shadow-md p-8">
    
<AddTodo add={this.formAdd.bind(this)}/>

  <>
  
  <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref>
          <li role="presentation">
            <a
              href="#tabs-home"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
              >Undone</a
            >
          </li>
         
          <li role="presentation">
            <a
              href="#tabs-home"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
              >Done</a
            >
          </li>
         
        </ul>
        
        <div className="mb-6 mx-30 w-1/5 flex  grid-cols-4">
    
   {
        todos.length ===0
        ? <p>there isnt anything</p>
        :  todos.map(item => <Todo text={item.text} text1={item.text1} key={item.key}/>)

        
    }
         
        </div>



  </>      
  
</div>


 )
}





}

export default App;