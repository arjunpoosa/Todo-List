// src/ToDo.jsx
import  { useState } from 'react';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>ToDo List</h1>
      <input
        style={styles.input}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button style={styles.button} onClick={handleAddTask}>
        Add Task
      </button>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            <span
              style={{
                textDecoration: task.isCompleted ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <div>
              <button style={styles.completeButton} onClick={() => handleToggleComplete(index)}>
                {task.isCompleted ? 'Undo' : 'Complete'}
              </button>
              <button style={styles.deleteButton} onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    width: '70%',
    marginRight: '10px',
   
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    color:"black"
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    margin: '10px 0',
  },
  completeButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginRight: '5px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ToDo;
