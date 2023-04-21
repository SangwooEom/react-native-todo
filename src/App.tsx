import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme, Theme} from './theme';
import {StatusBar, Alert, Dimensions} from 'react-native';
import Input from './components/Input';
import Task from './components/Task';

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

const List = styled.ScrollView<{width: number}>`
  flex: 1;
  width: ${props => props.width - 40}px;
`;

export default function App() {
  const width = Dimensions.get('window').width;
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
        <List width={width}>
          <Task text="Hanbit" />
          <Task text="React Native" />
          <Task text="React Native Sample" />
          <Task text="Edit TODO Item" />
        </List>
      </Container>
    </ThemeProvider>
  );
}
