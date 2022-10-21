import React, {useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'
import TaskForm from '../pure/taskForm'
import { Navigate } from 'react-router-dom'

const TaskList = ({loggedIn}) => {
  const defaultTask1 = new Task('Example1', 'Default description1', true, LEVELS.NORMAL)
  const defaultTask2 = new Task('Example2', 'Default description2', false, LEVELS.URGENT)
  const defaultTask3 = new Task('Example3', 'Default description3', false, LEVELS.BLOCKING)
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Task state has been modified')
    setLoading(false)
    return () => {
      console.log('TaskList component is going to unmount...')
    }

  }, [tasks])

  if(!loggedIn){
    return <Navigate to='/login' replace/>
  }

  function completeTask(task) {
    const index = tasks.indexOf(task)
    const newTasks = [...tasks]

    newTasks[index].completed = !newTasks[index].completed

    setTasks(newTasks)
  }


  function removeTask(task){
    const index = tasks.indexOf(task)
    const newTasks = [...tasks]
    newTasks.splice(index, 1)

    setTasks(newTasks)
  }

  function addTask(task){
    setTasks([...tasks, task])
  }

  const getTasksTable = () => {
    return(
      tasks.length > 0 ?
      <table className="table">
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
          tasks.map((task, i) => <TaskComponent remove={removeTask} complete={completeTask} key={i} task={task} />)
          }
        </tbody>
      </table>
      :
      <div>
        <h3>There are no tasks to show</h3>
      </div>
    )
  }

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header p-3">
                <h5 className='text-center'>
                  Your Tasks:
                </h5>
              </div>
              <div className="card-body position-relative" data-mdb-perfect-scrollbar='true'>
                {getTasksTable()}
                <TaskForm add={addTask}></TaskForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList