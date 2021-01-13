import React from 'react'

import { Container, LogoBox } from './header_style'
import Logo from '../../../assets/images/logo.png'

const Header = () => {

    return (
        <Container>
            <LogoBox>
                <img src={Logo} alt="" />
            </LogoBox>
        </Container>

    )
}

export default Header