import React from 'react';
import styled from 'styled-components/native';
import IconButton from './IconButton';
import {images} from '../Images';
import {Theme} from '../theme';

const Container = styled.View<{theme: Theme}>`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text<{theme: Theme}>`
  flex: 1;
  font-size: 24px;
  color: ${props => props.theme.text};
`;

const Task = ({text}: {text: string}) => {
  return (
    <Container>
      <IconButton type={images.uncompleted} />
      <Contents>{text}</Contents>
      <IconButton type={images.update} />
      <IconButton type={images.delete} />
    </Container>
  );
};

export default Task;
