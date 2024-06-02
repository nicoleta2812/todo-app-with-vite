// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>      
      <div>
      <header className="row">
      <h1>TODO</h1>
      <div className="theme-block">
        <input type="checkbox" name="theme" id="theme" />
        <label htmlFor="theme"></label>
      </div>
    </header>
    <main>
      <div className="add-item row">
        <input
          type="text"
          name=""
          id="addItem"
          placeholder="Create a new todo.."
        />
      </div>
      <section className="content">
        <ul>
          <li className="row">
            <label htmlFor="item" className="list-item">
              <input type="checkbox" name="todoItem" id="" checked />
              <span className="checkmark"></span>
              <span className="text">Text1</span>
            </label>
            <span className="removed"></span>
          </li>
          <li className="row">
            <label htmlFor="item" className="list-item">
              <input type="checkbox" name="todoItem" id="" />
              <span className="checkmark"></span>
              <span className="text">10 Minutes meditationS</span>
            </label>
            <span className="remove"></span>
          </li>
          <li className="row">
            <label htmlFor="item" className="list-item">
              <input type="checkbox" name="todoItem" id="" />
              <span className="checkmark"></span>
              <span className="text">Text 3</span>
            </label>
            <span className="remove"></span>
          </li>
          <li className="row">
            <label htmlFor="item" className="list-item">
              <input type="checkbox" name="todoItem" id="" />
              <span className="checkmark"></span>
              <span className="text">Text 4</span>
            </label>
            <span className="remove"></span>
          </li>
          <li className="row">
            <label htmlFor="item" className="list-item">
              <input type="checkbox" name="todoItem" id="" />
              <span className="checkmark"></span>
              <span className="text">Text 5</span>
            </label>
            <span className="remove"></span>
          </li>
          <li className="row">
            <label htmlFor="item" className="list-item">
              <input type="checkbox" name="todoItem" id="" />
              <span className="checkmark"></span>
              <span className="text">Text 6</span>
            </label>
            <span className="remove"></span>
          </li>
        </ul>
      </section>
      <section className="lower-items">
        <div className="items-left">2 items left</div>
        <div className="sort">
          <label htmlFor="">
            <input type="radio" name="sort" id="all" checked />
            <span className="text">All</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="sort" id="active" />
            <span className="text">Active</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="sort" id="completed" />
            <span className="text">Completed</span>
          </label>
        </div>
        <div>
          <span className="clear">Clear Completed</span>
        </div>
      </section>
    </main>
    <div className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>
    </div>
    </>
  )
}

export default App
