import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    width: ${props => props.fullWidth ? `100%` : `50px`};
    border: none;
    /* border-radius: 50%; */
    background: #444;
    color: white;
    height: 100%;
`

export const Button = ({ value, onClick, fullWidth, category }) =>
    <Btn onClick={onClick} value={value} fullWidth={fullWidth} className={category}>{value}</Btn>
