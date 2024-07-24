import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoItem.css'; // Make sure you have the correct CSS file

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            <h1>Your Todo List </h1>
            {tasks.map(task => (
                <TodoItem
                    key={task.id} 
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted} 
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)} 
                placeholder="Add a new task..."
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
}

export default TodoList;
