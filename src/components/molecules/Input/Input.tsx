import React, { ReactElement } from 'react'

import { InputBox } from './input_style'

interface Props {
    children: ReactElement
}

const Input = () => {

    return (
        <InputBox>
            <input />
        </InputBox>
    )
}

export default Input