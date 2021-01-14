import styled from 'styled-components'


export const Container = styled.div`
display:flex;
align-items: center;
justify-content:space-evenly;

input,p{
    margin:0 5px;
}

input:checked p{
text-decoration: overline;
background-color:black;
transform: scale(2)
}
`