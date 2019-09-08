import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:869px;
    height:360px;
    border-radius:4px;
    background-size:cover;
    background-position:center;
    margin-top: 66px;
    margin-left: 58px;
    background-image:url('https://miro.medium.com/max/4000/1*9ovc_rTIxEwQwQkCXPx2GA.jpeg');
    overflow:hidden;
    position: relative;
`

const DarkTheme = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    color:white;
    background-color:rgba(0,0,0,0.1);
    padding-top: 28px;
    padding-left: 34px;
`

const NormalText = styled.p`
    max-width: 60%;
    margin: 0 0 10px;
    padding: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    color: #FFF;
    user-select:none;
`

const SmallText = styled.p`
    margin-top: 30px;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #FFF;
`

const Image = () => (
    <Container>
        <DarkTheme >
            <NormalText>
                Make a note your day, inspiration, thinking just one time a day.
                Keep yourself always motivated, inspired
            </NormalText>
            <SmallText>
                Start journey to find yourself.
            </SmallText>
        </DarkTheme>

    </Container>
)

export default Image