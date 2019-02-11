import React, { useState } from 'react';
import styled from 'styled-components';
import { Display } from '../presentational/Display';
import { Button } from '../presentational/Button';
import { Buttons } from '../presentational/Buttons';
import { Grid, GridItem } from '../presentational/Grid';

const Container = styled.div`
    width: 50vmin;
    height: 90vmin;
    background: black;
    display: flex;
    flex-direction: column;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
`

export const Calculator = (props) => {
    const [operations, setOperations] = useState([]);
    const [total, setTotal] = useState(0);

    const addToOperations = (e) => {
        if(operations.length < 12)
            setOperations([...operations, e.target.value]);
    }

    return (
        <Container>
            <Display height="30%">{operations.join('')}</Display>
            <Buttons onClick={addToOperations} height="70%">
                <Grid columnTemplate="auto auto auto auto" rowTemplate="auto auto auto auto auto">
                    <Button fullWidth value={"C"} category="modifier"></Button>
                    <Button fullWidth value={"-"} category="modifier"></Button>
                    <Button fullWidth value={"%"} category="modifier"></Button>
                    <Button fullWidth value={"/"} category="operator"></Button>
                    <Button fullWidth value={'7'}></Button>
                    <Button fullWidth value={'8'}></Button>
                    <Button fullWidth value={'9'}></Button>
                    <Button fullWidth value={"*"} category="operator"></Button>
                    <Button fullWidth value={"4"}></Button>
                    <Button fullWidth value={'5'}></Button>
                    <Button fullWidth value={"6"}></Button>
                    <Button fullWidth value={"-"} category="operator"></Button>
                    <Button fullWidth value={'1'}></Button>
                    <Button fullWidth value={'2'}></Button>
                    <Button fullWidth value={'3'}></Button>
                    <Button fullWidth value={"+"} category="operator"></Button>
                    <GridItem colSpan="2">
                        <Button fullWidth value={'0'}></Button>
                    </GridItem>
                    <Button fullWidth value={'.'}></Button>
                    <Button fullWidth value={'='} category="operator"></Button>
                </Grid>
            </Buttons>
        </Container>
    )
};
