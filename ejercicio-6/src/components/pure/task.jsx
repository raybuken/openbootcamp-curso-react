import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task, complete, remove }) => {

  useEffect(() => {
    console.log('Created Task')

    return () => {
      console.log(`Task: ${task.name} is going to unmount`)
    }
  }, [task])

  function getTaskLevelBadge () {
    let badgeType;

    switch(task.level){
      case LEVELS.NORMAL:
        badgeType = 'primary'
        break;
      case LEVELS.BLOCKING:
        badgeType = 'warning'
        break;
      case LEVELS.URGENT:
        badgeType = 'danger'
        break;
      default:
        badgeType = 'primary'
        break;
    }

    return (
      <h6 className='mb-0'>
        <span className={`badge bg-${badgeType}`}>
          {task.level}
        </span>
      </h6>
    )
  }

  function getTaskIconCompleted(){
    return task.completed ?
      (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
    : (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
  }

  return (
    <tr className={`fw-normal ${task.completed ? 'task-completed' : 'task-pending'}`}>
      <th><span className='ms-2'>{ task.name }</span></th>
      <td className="align-middle">
        <span>{ task.description }</span>
      </td>
      <td className="align-middle">
        {getTaskLevelBadge()}
      </td>
      <td className="align-middle">
        {getTaskIconCompleted()}
        <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'tomato'}}></i>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent
