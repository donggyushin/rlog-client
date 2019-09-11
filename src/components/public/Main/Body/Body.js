import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import NeonLightTextEffects from '../../../global/NeonLightTextEffects';
import Copyright from '../../../global/Copyright';

const Container = styled.div`
    display:flex;
    flex-direction:column;

`

const NeonLightTextEffectsContainer = styled.div`
    position: absolute;
    top:10%;
    left:11%;
`

const CopyrightContainer = styled.div`
    margin-top:88px;
`

const Body = () => <Container>
    <Image />
    <NeonLightTextEffectsContainer>
        <NeonLightTextEffects />
    </NeonLightTextEffectsContainer>
    <CopyrightContainer>
        <Copyright />
    </CopyrightContainer>
</Container>

export default Body;