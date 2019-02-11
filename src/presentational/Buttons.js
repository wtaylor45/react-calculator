import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: ${props => props.height};
`

export const Buttons = ({onClick, height, children}) => 
    <Container onClick={onClick} height={height}>
        {children}
    </Container>
