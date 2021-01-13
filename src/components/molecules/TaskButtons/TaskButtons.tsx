import React from 'react'

import { Container } from './taskButtons_style'
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs'
import Button from '../../atoms/Button/Button'


const TaskButton = () => {

    return (
        <Container>
            <Button>
                <BsPencilSquare />
            </Button>
            <Button>
                <BsTrashFill />
            </Button>
        </Container>
    )
}

export default TaskButton