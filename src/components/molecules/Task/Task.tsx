import React from 'react'

import { TaskBox } from './task_style'
import TaskButton from '../TaskButtons/TaskButtons'
import TaskInfos from '../../atoms/TaskInfos/Task'


const Task = () => {

    return (
        <TaskBox>
            <TaskInfos />
            <TaskButton />
        </TaskBox>

    )
}

export default Task