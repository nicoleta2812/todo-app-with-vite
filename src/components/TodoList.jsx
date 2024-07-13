import crossImage from "../assets/images/icon-cross.svg"
import { useState } from "react";

function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("");
    
    function handleChange(event){
        setNewTask(event.target.value);
        console.log(newTask);
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(newTask);
        const task = {
            taskName: newTask, 
            checked: false,
            id: Date.now()
        }
        console.log(task)
        setTodoList([...todoList, task])
        setNewTask("");
    }
    function handleDelete(id){
        setTodoList(todoList.filter((task) => task.id !== id))
    }
    function completeTask(id){
        setTodoList(todoList.map((task) => {
            if(task.id === id){
                return {...task, checked: !task.checked}
            } else {
                return task
            }
        }))
    }
    function clearList(){
        setTodoList([])
    }
    return <header>
        <TodoItems handleSubmit={handleSubmit} handleChange={handleChange} newTask={newTask} setNewTask={setNewTask} todoList={todoList} handleDelete={handleDelete} completeTask={completeTask} clearList={clearList}/>
    </header>
}
function TodoItems({ handleSubmit, handleChange, newTask, todoList, handleDelete, completeTask, clearList }){
    
    return (
        <div className="container">
            <div className="header-content">
                <h2>TODO</h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Create a New Todo" 
                value={newTask} 
                onChange={handleChange}/>
            </form>
            <ul>{todoList.map((task) => { 
                return (<List items={task.taskName} key={task.id} handleDelete={handleDelete} task = {task} completeTask={completeTask}/>)                
            })}
                
                <FooterItems clearList={clearList} />
            </ul>
        </div>
    )
}
function List({ newTask, task, handleDelete, completeTask }){
    return (
        <div>
            <li>
                <div>
                    <input type="checkbox" name="" id="" value={newTask} onChange={() => completeTask(task.id)}/>
                    <p style={task.checked ? {textDecoration: "line-through"} : {}}>
                        {task.taskName}</p>
                    </div>
                    <img src={crossImage} alt="" onClick={() => handleDelete(task.id)}/>
                </li>            
        </div>
    )
}
function FooterItems({ clearList }){
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
                    <p onClick={clearList}>Clear Completed</p>                   
                    </div>                    
                </li>
        </div>
    )
}

export default TodoList