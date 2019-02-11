import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    font-size: calc(16px + 5vmin);
    padding-top: 10%;
    color: white;
    background: black;
    text-align: right;
`

export const Display = ({total}) => 
    <Div>
        {total}
    </Div>
