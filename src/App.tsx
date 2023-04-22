import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme, Theme} from './theme';
import {StatusBar, Dimensions} from 'react-native';
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

  const [tasks, setTasks] = useState({
    '1': {id: '1', text: 'Hanbit', completed: false},
    '2': {id: '2', text: 'React Native', completed: true},
    '3': {id: '3', text: 'React Native Sample', completed: false},
    '4': {id: '4', text: 'Edit TODO Item', completed: false},
  });

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id: ID, text: newTask, completed: false},
    };
    setNewTask('');
    setTasks({...tasks, ...newTaskObject});
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
          {Object.values(tasks)
            .reverse()
            .map(item => (
              <Task key={item.id} text={item.text} />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
