import React, { useState } from 'react'
import Task from '../../molecules/Task/Task'
import AddTask from '../../molecules/AddTask/AddTask'
import { Container, Title, TaskContainer } from './todoList_style'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../molecules/Input/Input'

const TodoList = () => {
    const [inputTask, setInputTask] = useState(false)
    const tasks = useSelector((state: any) => state.task.tasks)
    const dispatch = useDispatch()
    return (
        <Container>
            <Title>TodoList</Title>
            <TaskContainer>
                {tasks && tasks.map((elem: any, key: number) => <Task key={key}>{elem.desc}</Task>)}
                {inputTask ?
                    <Input />
                    : <AddTask setInputTask={setInputTask} />

                }
            </TaskContainer>
        </Container>

    )
}

export default TodoList