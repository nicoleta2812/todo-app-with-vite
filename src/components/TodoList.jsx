import crossImage from "../assets/images/icon-cross.svg"
import { useState } from "react";

function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [task, setTask] = useState("");
    
    function handleChange(event){
        setTask(event.target.value);
        console.log(task);
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(task);
        setTodoList([...todoList, task])
        setTask("");
    }
    return <header>
        <TodoItems handleSubmit={handleSubmit} handleChange={handleChange} task={task} setTask={setTask} todoList={todoList}/>
    </header>
}
function TodoItems({ handleSubmit, handleChange, task, setTask, todoList }){
    
    return (
        <div className="container">
            <div className="header-content">
                <h2>TODO</h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Create a New Todo" 
                value={task} 
                onChange={handleChange}/>
            </form>
            <ul>{todoList.map((task) => { 
                return (<List task={task} key={task} />)                
            })}
                
                <FooterItems />
            </ul>
        </div>
    )
}
function List({ task }){
    return (
        <div>
            <li>
                <div>
                    <input type="checkbox" name="" id="" value={task} />
                    <p>{task}</p>
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