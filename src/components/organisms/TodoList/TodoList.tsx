import React from 'react'
import Task from '../../molecules/Task/Task'
import AddTask from '../../molecules/AddTask/AddTask'
import { Container, Title } from './todoList_style'

const TodoList = () => {

    return (
        <Container>
            <Title>TodoList</Title>
            {Array(10).fill(0).map((elem, key) => <Task key={key} />)}
            <AddTask></AddTask>
        </Container>

    )
}

export default TodoList