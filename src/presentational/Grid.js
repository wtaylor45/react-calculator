import React from 'react';
import styled from 'styled-components';

const GridDiv = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: ${({columnTemplate}) => columnTemplate};
    grid-template-rows: ${({rowTemplate}) => rowTemplate};
    height: 100%;
`

const ItemDiv = styled.div`
    grid-row-end: ${({rowSpan}) => "span "+rowSpan};
    grid-column-end: ${({colSpan}) => "span "+colSpan};
`

export const Grid = ({children, rowTemplate, columnTemplate}) => 
    <GridDiv columnTemplate={columnTemplate} rowTemplate={rowTemplate}>
        {children}
    </GridDiv>

export const GridItem = ({children, rowSpan, colSpan}) => 
    <ItemDiv rowSpan={rowSpan} colSpan={colSpan}>
        {children}
    </ItemDiv>
