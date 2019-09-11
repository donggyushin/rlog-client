import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Link = styled.a`
    text-decoration:none;
`

const Text = styled.span`
    cursor: pointer;
    position: relative;
    color:black;
    &:hover::after {
        width: 100%;
    left: 0px;
    }
    &::after {
        content: "";
    position: absolute;
    width: 0px;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0px;
    background: black;
    transition: width 0.4s ease 0s;
    }
`

const Copyright = () => <Container>
    <Link href={'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=donggyu9410@gmail.com&tf=1'}>
        <Text>
            @copyright developer rontend
    </Text>
    </Link>
</Container>

export default Copyright