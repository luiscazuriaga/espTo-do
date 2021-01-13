import React from 'react'
import Header from '../../components/organisms/Header/Header'
import TodoList from '../../components/organisms/TodoList/TodoList'

import { Container } from '../../templates/container'

const Home = () => {

    return (
        <Container>
            <Header />
            <TodoList />
        </Container>

    )
}

export default Home