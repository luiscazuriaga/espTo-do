import styled from 'styled-components'


export const Container = styled.div`
display:flex;
align-items: center;
flex-flow:column;
width:40%;
height:100%;
margin-top:20px;
`

export const Title = styled.h1`
align-self: flex-start;
font-family: 'Poppins', sans-serif;
`

export const TaskContainer = styled.div`
display:flex;
align-items: center;
flex-flow:column;
width:100%;
height:80vh;
overflow-y:scroll;
overflow-x:hidden;
`