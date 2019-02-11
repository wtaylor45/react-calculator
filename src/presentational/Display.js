import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    font-size: calc(24px + 5vmin);
    padding-top: 10%;
    color: white;
    background: black;
    text-align: right;
    height: ${props => props.height};
`

export const Display = ({total, height}) => 
    <Div height={height}>
        {total}
    </Div>
