import styled from 'styled-components'

const Box = styled.div`
    background-color: ${props => props.bgcolor || 'lightgray'};
    color: white;
    font-size: 24pt;
    font-weight: bold;
    padding: 10px
`
const Button = styled.button`
    background-color: ${props => props.bgcolor || 'lightgray'};
    border: 1px solid gray
    color: white;
    font-weight: bold;
    padding: 5px;

    &:hover {
        background-color: white;
        color: gray;
    }

    & + & {
        margin: 10px;
    }
`
export {Box, Button}