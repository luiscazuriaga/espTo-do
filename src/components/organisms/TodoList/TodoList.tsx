import React from 'react'
import Task from '../../molecules/Task/Task'
import AddTask from '../../molecules/AddTask/AddTask'
import { Container, Title, TaskContainer } from './todoList_style'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const tasks = useSelector((state: any) => state.task.tasks)
    console.log(tasks)
    return (
        <Container>
            <Title>TodoList</Title>
            <TaskContainer>
                {tasks && tasks.map((elem: any, key: number) => <Task key={key}>{elem.desc}</Task>)}
                <AddTask />
            </TaskContainer>
        </Container>

    )
}

export default TodoList