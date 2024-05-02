import React, { useEffect, useState } from 'react';

interface Task {
    id: number;
    name: string;
    isComplete: boolean;
  }
  

  const ItemList = () => {
    const [task, setTask] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState("");


    const getTaskName = (event: any) => {
        setTaskName(event.target.value);
    }


    const addTask = () => {
        const newTask: Task = {
            id: task.length + 1,
            name: taskName,
            isComplete: false
        }
        setTask([...task, newTask])
    }

    const markAsComplete = (id: number) => {
        setTask(prevTask => 
            prevTask.map((task) => task.id === id ? {...task, isComplete: true} : task
            )
        )
    }

    const deleteTask = (id: number) => {
        setTask(prevTasks => prevTasks.filter((item) => item.id !== id));
    }



    const formatData = (list: any) : {student: any, courses: any[]} => {
        const student = list.student;
        const courses = list.courses.map((course: any) => course)

        return {student: student, courses: courses}
    }



    
return (
    <>
    <div>
        <input type='text' value={taskName} onChange={(e) => getTaskName(e)}></input>
        <button onClick={addTask}>Add Task</button>
        <ul>
            {task.map((taskItem) => (
                <>
                <li key={taskItem.id} 
                style={taskItem.isComplete ? {textDecoration: 'line-through'} : {}}>
                    <span>{taskItem.name}
                    <button onClick={() => markAsComplete(taskItem.id)}>Mark as Complete</button>
                    {taskItem.isComplete ? 
                    <button onClick={() => deleteTask(taskItem.id)}>Delete</button> 
                    : ""}
                    </span>
                </li>
                </>
            ))}
        </ul>
    </div>
    </>
)
  }

  export default ItemList;