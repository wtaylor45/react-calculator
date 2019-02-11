import React from 'react';
import styled from 'styled-components';
import { Calculator } from './containers/Calculator';

const Container = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  height: 100%;
`

export const App = () =>
  <Container className="App">
    <Calculator />
  </Container>
