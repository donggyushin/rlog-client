import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import NeonLightTextEffects from '../../../global/NeonLightTextEffects';

const Container = styled.div`
    display:flex;
`

const Body = () => <Container>
    <Image />
    <NeonLightTextEffects />
</Container>

export default Body;