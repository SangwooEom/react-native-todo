import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme, Theme} from './theme';
import {StatusBar, Alert} from 'react-native';
import Input from './components/Input';

const Container = styled.SafeAreaView<{theme: Theme}>`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text<{theme: Theme}>`
  font-size: 40px;
  font-weight: 600;
  color: ${props => props.theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

export default function App() {
  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    Alert.alert(`Add: ${newTask}`);
    setNewTask('');
  };

  const _handleTextChange = (text: string) => {
    setNewTask(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
      </Container>
    </ThemeProvider>
  );
}
