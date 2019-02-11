import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    width: ${props => props.fullWidth ? `100%` : `50px`};
    border: none;
    background: #444;
    color: white;
    height: 100%;
    font-weight: 700;
    font-size: calc(8px + 1vmin);

    &.operator {
        background: orange;
    }

    &.modifier {
        background: gray;
        color: black;
    }
`

export const Button = ({ value, onClick, fullWidth, category }) =>
    <Btn onClick={onClick} value={value} fullWidth={fullWidth} className={category}>{value}</Btn>
