import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme, Theme} from './theme';

const Container = styled.View<{theme: Theme}>`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}
