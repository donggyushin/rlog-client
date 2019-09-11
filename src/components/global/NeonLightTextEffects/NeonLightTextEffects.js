import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        opacity:1;
    }30% {
        opacity:1;
    } 40% {
        opacity:0.5;
    }50%{
        opacity:1;
    }100%{
        opacity:1;
    }
`

const Container = styled.div`
    transform: translate(-50%, -50%) skewY(-5deg);
    position:absolute;
    border: 4px solid #fff;
    padding:3px 10px;
    border-radius:10px;
    box-shadow: 0 0 10px #2196f3,0 0 30px #2196f3, inset 0 0 10px #2196f3, inset 0 0 30px #2196f3;
    animation: ${animate} .4s linear infinite;
    ::before {
        content: '';
    box-shadow: 0 0 10px #2196f3, 0 0 30px #2196f3;
    z-index: -1;
    width: 100%;
    position: absolute;
    bottom: 11px;
    left: 0;
    height: 2px;
    background: #fff;
    }
    ::after {
        content: '';
    box-shadow: 0 0 10px #2196f3, 0 0 30px #2196f3;
    z-index: -1;
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 0;
    height: 2px;
    background: #fff;
    }
`



const H1 = styled.h1`
    margin:0;
    padding:0;
    font-size:24px;
    color: #fff;
    text-shadow: 0 0 10px #2196f3,0 0 20px #2196f3, 0 0 80px #2196f3,0 0 120px #2196f3;
    user-select:none;
`

const Span = styled.span`
    font-family: 'Lato', sans-serif;
    animation: ${animate} .5s linear infinite;
    &:nth-child(1) {
        animation-delay: .25s;
        margin-right:5px;
    }
    &:nth-child(2) {
        animation-delay: .2s;
    }
    &:nth-child(3) {
        animation-delay: .35s;
    }
    &:nth-child(4) {
        animation-delay: .4s;
    }
`

const NeonLightTextEffects = () => (
    <Container>
        <H1>
            <Span>R</Span>
            <Span>L</Span>
            <Span>o</Span>
            <Span>g</Span>
        </H1>
    </Container>
)

export default NeonLightTextEffects