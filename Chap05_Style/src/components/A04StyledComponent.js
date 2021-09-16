
// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from 'react'
// import styled from 'styled-components'      // 기존 HTML 요소에 CSS를 적용해서 새로운 태그를 생성해 준다

import {Box, Button} from './css/A04Styled'
import {Button as Btn} from 'reactstrap'
import { Md3DRotation } from "react-icons/md";
/*
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
*/

function A04StyledComponent() {
    return (
        <div>
            <h3>A04 Styled Component</h3>

            <Box bgcolor="gray">Box 안에 있는 컨텐츠</Box>
            <Button>Click 01</Button>
            <Button>Click 01</Button>
            <br/> <br />

            <Btn color="primary">CLICK</Btn>
            <Btn color="danger">CLICK</Btn>
            <br /><br />
            <Md3DRotation style={{color: 'orange', fontSize: '30pt'}} />
        </div>
    )
}

export default A04StyledComponent
