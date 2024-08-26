import React, {useState, useEffect} from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching tasks
    setTimeout(() => {
      setTasks([
        {
          id: 1,
          title: 'Design UI',
          description: 'Create stunning UI for the app',
          priority: 'medium',
          status: 'In Progress', // Default status
        },
        {
          id: 2,
          title: 'Set Up Backend',
          description: 'Create the backend for the task manager',
          priority: 'high',
          status: 'To Do',
        },
        // Add more tasks here
      ])
      setLoading(false)
    }, 1000)
  }, [])

  // Function to handle adding a new task
  const addTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  // Function to handle status change
  const changeTaskStatus = (id, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, status: newStatus} : task,
      ),
    )
  }

  // Function to mark task as done
  const markTaskAsDone = id => {
    changeTaskStatus(id, 'Done')
  }

  // Function to delete a task
  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <div className="task-form fade-in">
        <h2>Create a Task</h2>
        <TaskForm onSubmit={addTask} />
      </div>

      <div className="task-list">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <h2>Task List</h2>
            {tasks.filter(task => task.status !== 'Done').length === 0 ? (
              <p>No tasks in this category</p>
            ) : (
              tasks
                .filter(task => task.status !== 'Done')
                .map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onStatusChange={changeTaskStatus}
                    onMarkAsDone={markTaskAsDone}
                    onDelete={deleteTask} // Pass the delete function here
                  />
                ))
            )}
          </>
        )}
      </div>

      <div className="done-list">
        <h2>Done Tasks</h2>
        {tasks.filter(task => task.status === 'Done').length === 0 ? (
          <p>No completed tasks</p>
        ) : (
          tasks
            .filter(task => task.status === 'Done')
            .map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onStatusChange={changeTaskStatus}
                onMarkAsDone={markTaskAsDone}
                onDelete={deleteTask} // Pass the delete function here as well
              />
            ))
        )}
      </div>
    </div>
  )
}

export default App
