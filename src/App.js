import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import PrivateRouter from './components/private/private';
import PublicRouter from './components/public/public';


const Container = styled.div``


function App() {
  const auth = useSelector(state => state.auth)
  return (
    <Container>
      {auth.isLoggedIn ? <PrivateRouter /> : <PublicRouter />}
    </Container>
  );
}


export default (App);
