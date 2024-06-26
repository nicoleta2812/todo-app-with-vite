import crossImage from "../assets/images/icon-cross.svg"
function TodoList() {
    return <header>
        <TodoItems/>
    </header>
}
function TodoItems(){
    return (
        <div className="container">
            <div className="header-content">
                <h2>TODO</h2>
            </div>
            <form action="">
                <input type="text" placeholder="Create a New Todo" />
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