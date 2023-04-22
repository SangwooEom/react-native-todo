import React, {useState} from 'react';
import styled from 'styled-components/native';
import IconButton from './IconButton';
import {images} from '../Images';
import {Theme} from '../theme';
import Input from './Input';

const Container = styled.View<{theme: Theme}>`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text<{completed: boolean; theme: Theme}>`
  flex: 1;
  font-size: 24px;
  color: ${props => (props.completed ? props.theme.done : props.theme.text)};
  text-decoration-line: ${props => (props.completed ? 'line-through' : 'none')};
`;

const Task = ({
  item,
  deleteTask,
  toggleTask,
  updateTask,
}: {
  item: {id: string; text: string; completed: boolean};
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  updateTask: (item: any) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _handleUpdateButtonPress = () => {
    setIsEditing(true);
  };

  const _onSubmitEditing = () => {
    if (isEditing) {
      const editTask = Object.assign({}, item, {text});
      setIsEditing(false);
      updateTask(editTask);
    }
  };

  const _onBlur = () => {
    if (isEditing) {
      setIsEditing(false);
      setText(item.text);
    }
  };

  return isEditing ? (
    <Input
      value={text}
      onChangeText={textValue => setText(textValue)}
      onSubmitEditing={_onSubmitEditing}
      onBlur={_onBlur}
    />
  ) : (
    <Container>
      <IconButton
        type={item.completed ? images.completed : images.uncompleted}
        id={item.id}
        onPressOut={toggleTask}
        completed={item.completed}
      />
      <Contents completed={item.completed}>{item.text}</Contents>
      {item.completed || (
        <IconButton
          type={images.update}
          onPressOut={_handleUpdateButtonPress}
        />
      )}
      <IconButton
        type={images.delete}
        id={item.id}
        onPressOut={deleteTask}
        completed={item.completed}
      />
    </Container>
  );
};

export default Task;
