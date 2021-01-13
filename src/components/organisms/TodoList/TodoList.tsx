import React from 'react'

import { Container } from './todoList_style'


const TodoList = () => {

    return (
        <Container>
            <div>TodoList</div>
            {Array(10).fill(0).map((elem, key) => <div key={key}>Todo aqui {elem}</div>)}
        </Container>

    )
}

export default TodoList