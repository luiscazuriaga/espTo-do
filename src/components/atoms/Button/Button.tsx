import React, { ReactElement } from 'react'

import { ButtonBox } from './button_style'

interface Props {
    children: ReactElement
}

const Button = ({ children }: Props) => {

    return (
        <ButtonBox>
            {children}
        </ButtonBox>
    )
}

export default Button