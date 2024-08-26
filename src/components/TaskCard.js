import React from 'react'

function TaskCard({task, onMarkAsDone, onDelete}) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <div className="button-container">
        <button className="mark-done" onClick={() => onMarkAsDone(task.id)}>
          Mark as Done
        </button>
        <button className="delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard
