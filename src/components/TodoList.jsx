import crossImage from "../assets/images/icon-cross.svg"
import { useState } from "react";

function TodoList() {
    const [task, setTask] = useState("");
    
    function handleTodo(event){
        setTask(event.target.value);
        console.log(task);
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(task);
        setTask("");
    }
    return <header>
        <TodoItems handleSubmit={handleSubmit} handleTodo={handleTodo} task={task} setTask={setTask}/>
    </header>
}
function TodoItems({ handleSubmit, handleTodo, task, setTask }){
    
    return (
        <div className="container">
            <div className="header-content">
                <h2>TODO hi</h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Create a New Todo" 
                value={task} 
                onChange={handleTodo}/>
            </form>
            <ul>
                <List />
                <FooterItems />
            </ul>
        </div>
    )
}
function List(){
    return (
        <div>
           <li>
                    <div>
                    <input type="checkbox" name="" id="" />
                    <p>Todo 1</p>
                    </div>
                    <img src={crossImage} alt="" />
                </li>
                <li>
                    <div>
                    <input type="checkbox" name="" id="" />
                    <p>Todo 1</p>
                    </div>
                    <img src={crossImage} alt="" />
                </li> 
                <li>
                    <div>
                    <input type="checkbox" name="" id="" />
                    <p>Todo 1</p>
                    </div>
                    <img src={crossImage} alt="" />
                </li>                 
        </div>
    )
}
function FooterItems(){
    return (
        <div>
            <li className="footer-items">
                    <div className="left-items">
                    <p>2 Items Left</p>                   
                    </div>
                    <div className="active-items">
                    <p>0 Completed</p>                   
                    </div>
                    <div className="clear">
                    <p>Clear Completed</p>                   
                    </div>                    
                </li>
        </div>
    )
}

export default TodoList