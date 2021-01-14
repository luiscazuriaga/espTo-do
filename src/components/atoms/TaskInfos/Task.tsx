import React, { ReactElement } from 'react'

import { Container } from './task_style'

interface Props {
    children: ReactElement
}

const TaskInfos = ({ children }: Props) => {

    return (
        <Container>
            <input type="checkbox" />
            <p>{children}</p>
        </Container>

    )
}

export default TaskInfos