import React from 'react'
import Logo from '../../assets/logo-dio.png'
import {
    BuscarInputContainer,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    Input,
    UserPicture
 } from './styles'

import { Button } from '../Button'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={Logo} alt="Logo da Dio"/>
                {autenticado ? (
                <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/38577266?v=4https://avatars.githubusercontent.com/u/38577266?v=4'/>
                ) : (
                    <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
