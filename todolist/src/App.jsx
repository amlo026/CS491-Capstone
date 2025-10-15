import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//for each task
const ToDo = ({ task }) => (
  <li className = "todo-container">
    <span className='task.text'>{task.text}</span>
  </li>
);

function App() {
  // const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([]); //holds the list of tasks being added
  const [input, setInput] = useState(''); //textbox to hold current task
  
  const addTask = (e) => {
    e.preventDefault(); //stops page from refreshing

    //when user tries to add a task with textbox empty
    if (input.trim() === '') {
      alert('Cannot be empty. Please enter a valid task: ');
      return;
    }

    //creating the task
    const newTask = { id: Date.now(), text: input.trim() };

    setTasks([...tasks, newTask]); //making the list
    setInput(''); //clears textbox after adding
  };

  return (
    <>

      <h1>To-Do List App</h1>
      <div className="card"> 

        <form onSubmit={addTask}>
          <input className='taskInput'
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Enter a task" 
          />
          <button className='addButton' type="submit">+</button>
        </form>

        <ul className='taskList'>
          {tasks.map((task) => (
            <ToDo key={task.id} task={ task } />
          ))}
        </ul>
        
      </div>
    </>
  )
}

export default App
