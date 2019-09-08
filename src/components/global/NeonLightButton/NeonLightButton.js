import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
    position: relative;
    display:inline-block;
    padding: 15px 30px;
    color: #2196f3;
    text-transform:uppercase;
    letter-spacing:4px;
    text-decoration:none;
    font-size:14px;
    overflow:hidden;
    transition: 0.2s;
    cursor: pointer;
    /* &:hover {
        color:#255784;
        background:#2196f3;
        box-shadow: 0 0 10px #2196f3,0 0 40px #2196f3,0 0 80px #2196f3;
        transition-delay: 1s;
    } */
`

const Span = styled.span`
    position:absolute;
    display:block;
    &:nth-child(1) {
        top:0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #2196f3);
        ${Container}:hover & {
            left: 100%;
            transition: 1s;
        }
    }

    &:nth-child(3) {
        bottom:0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #2196f3);
        ${Container}:hover & {
            right: 100%;
            transition: 1s;
            transition-delay: 0.5s;
        }
    }


    &:nth-child(2) {
        top:-100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #2196f3);
        ${Container}:hover & {
            top: 100%;
            transition: 1s;
            transition-delay: 0.25s;
        }
    }

    
    &:nth-child(4) {
        bottom:-100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #2196f3);
        ${Container}:hover & {
            bottom: 100%;
            transition: 1s;
            transition-delay: 0.75s;
        }
    }
    


`

const NeonLightButton = ({ text, to }) => (
    <Container href={to}>
        <Span />
        <Span />
        <Span />
        <Span />
        {text}
    </Container>
)

export default NeonLightButton