import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    padding-top: 10%;
    font-size: calc(48px + 2vmin);
    color: white;
    background: black;
    height: ${props => props.height};
    display: flex;
    justify-content: flex-end;
`

export const Display = ({ children, height, error }) => {
    return <Div height={height}>
        {error ? "Error" : (children || "0")}
    </Div>
}