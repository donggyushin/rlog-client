import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';


const Container = styled.div`
    min-height: 100vh;
    /* background: #031321; */
`

class Main extends React.Component {


    render() {

        return <Container>
            <Header />
            <Body />
        </Container>
    }
}

export default Main