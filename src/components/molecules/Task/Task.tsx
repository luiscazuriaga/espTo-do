import React, { ReactElement } from 'react'

import { TaskBox } from './task_style'
import TaskButton from '../TaskButtons/TaskButtons'
import TaskInfos from '../../atoms/TaskInfos/Task'

interface Props {
    children: ReactElement
}

const Task = ({ children }: Props) => {

    return (
        <TaskBox>
            <TaskInfos>
                {children}
            </TaskInfos>
            <TaskButton />
        </TaskBox>

    )
}

export default Task