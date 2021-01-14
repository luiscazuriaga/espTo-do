import React, { Dispatch, SetStateAction } from 'react'
import Button from '../../atoms/Button/Button'

import { BsPlusCircle } from 'react-icons/bs'
import { AddTaskBox } from './addTask_style'

interface Props {
    setInputTask: Dispatch<SetStateAction<boolean>>;
}

const AddTask = ({ setInputTask }: Props) => {

    return (
        <AddTaskBox onClick={() => setInputTask(true)}>
            <Button>
                <BsPlusCircle />
            </Button>
            <p>Add Task</p>
        </AddTaskBox>

    )
}

export default AddTask