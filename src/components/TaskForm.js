import React, {useState} from 'react'

function TaskForm({onSubmit}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = e => {
    e.preventDefault()
    const newTask = {
      title,
      description,
      priority,
      status: 'In Progress', // Default status
    }
    onSubmit(newTask)
    setTitle('') // Reset input field
    setDescription('') // Reset input field
    setPriority('medium') // Reset input field
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
