import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`

export const Buttons = ({onClick, children}) => 
    <Container onClick={onClick}>
        {children}
    </Container>