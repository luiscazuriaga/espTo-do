import React from 'react'
import Button from '../../atoms/Button/Button'

import { BsPlusCircle } from 'react-icons/bs'
import { AddTaskBox } from './addTask_style'


const AddTask = () => {

    return (
        <AddTaskBox>
            <Button>
                <BsPlusCircle />
            </Button>
            <p>Add Task</p>
        </AddTaskBox>

    )
}

export default AddTask