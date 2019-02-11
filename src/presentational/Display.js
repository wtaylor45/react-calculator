import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    font-size: calc(48px + 2vmin);
    padding-top: 10%;
    color: white;
    background: black;
    text-align: right;
    height: ${props => props.height};
`

export const Display = ({children, height}) => 
    <Div height={height}>
        {children}
    </Div>
