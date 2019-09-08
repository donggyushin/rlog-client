import React from 'react';
import styled from 'styled-components';
import NeonLightButton from '../../../global/NeonLightButton';

const Container = styled.div`
    padding-right: 10px;
    padding-top: 4px;
    display:flex;
    justify-content:flex-end;
    padding-right:10px 20px;
    
`



const Header = () => (
    <Container>
        <NeonLightButton text={'Sign in'} to={'/sign-in'} />
        <NeonLightButton text={'Sign up'} to={'/sign-up'} />
    </Container>
)

export default Header