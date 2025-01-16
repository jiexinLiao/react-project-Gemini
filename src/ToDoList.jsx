import React, { useState} from "react"
function ToDolist() {


  const [tasks, setTasks] = useState(['eat breakfast','take a shower','walk a dog']);
  const [newTask, setNewTask] = useState({})

  function handleInputChange(event){
      setNewTask(event.target.value)
  }

  function addTask(){
        if(newTask.trim() !=='task'){
          setTasks(t => [...t,newTask])
          setNewTask('');
        }
  }

  function deleteTask(index){
      const updatedTask = tasks.filter((_,i) => i !== index)
      setTasks(updatedTask);
  }

  function moveTaskUP(index){
      if(index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];

        setTasks(updatedTask)
      }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updatedTask = [...tasks];
      [updatedTask[index],updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];

      setTasks(updatedTask)
    }
  }

  return (<>
  
    <div className="to-do-list">
      <h1>To Do list</h1>
      <div>
        <input
        type="text"
        placeholder="enter a task"
        value={newTask}
        onChange={handleInputChange}/>
        <button
        className="add-button"
        onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => 
         <li key={index}>
          <span className="text">{task}</span>
          <button
          className="delete-button"
          onClick={() => deleteTask(index)}>
            Delete
          </button>

          <button
          className="move-button"
          onClick={() => moveTaskUP(index)}>
           up
          </button>

          <button
          className="move-button"
          onClick={() => moveTaskDown(index)}>
          down
          </button>
         </li>
        ) }
      </ol>
    </div>

  </>)
}

export default ToDolist